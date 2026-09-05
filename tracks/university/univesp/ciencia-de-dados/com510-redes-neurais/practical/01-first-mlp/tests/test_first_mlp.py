"""Validações comportamentais do PRACTICAL 01, sem fornecer a solução."""

import sys
from pathlib import Path

import numpy as np
import pytest

SRC_DIR = Path(__file__).parents[1] / "src"
sys.path.insert(0, str(SRC_DIR))

from first_mlp import (
    create_model,
    evaluate_predictions,
    load_dataset,
    make_predictions,
    split_train_test,
    standardize_features,
    train_model,
)


def require_attempt(action):
    try:
        return action()
    except NotImplementedError as error:
        pytest.skip(str(error))


def dataset():
    return require_attempt(load_dataset)


def split_data():
    features, target = dataset()
    return require_attempt(lambda: split_train_test(features, target))


def standardized_data():
    train_features, test_features, train_target, test_target = split_data()
    scaled_train, scaled_test = require_attempt(
        lambda: standardize_features(train_features, test_features)
    )
    return scaled_train, scaled_test, train_target, test_target


def trained_model():
    train_features, test_features, train_target, test_target = standardized_data()
    model = require_attempt(create_model)
    model = require_attempt(lambda: train_model(model, train_features, train_target))
    return model, test_features, test_target


def test_checkpoint_1_returns_features_and_target_with_compatible_shapes():
    features, target = dataset()
    assert features.ndim == 2
    assert target.ndim == 1
    assert features.shape[0] == target.shape[0]
    assert features.shape[0] > 0
    assert features.shape[1] > 0


def test_checkpoint_2_preserves_examples_and_feature_count():
    features, target = dataset()
    train_features, test_features, train_target, test_target = split_data()
    assert train_features.shape[0] == train_target.shape[0]
    assert test_features.shape[0] == test_target.shape[0]
    assert train_features.shape[0] + test_features.shape[0] == features.shape[0]
    assert train_features.shape[1] == test_features.shape[1] == features.shape[1]


def test_checkpoint_3_preserves_shapes_and_has_no_nan():
    train_features, test_features, _, _ = split_data()
    scaled_train, scaled_test = require_attempt(
        lambda: standardize_features(train_features, test_features)
    )
    assert scaled_train.shape == train_features.shape
    assert scaled_test.shape == test_features.shape
    assert np.isfinite(scaled_train).all()
    assert np.isfinite(scaled_test).all()


def test_checkpoint_4_trained_model_can_predict():
    model, test_features, _ = trained_model()
    assert callable(getattr(model, "predict", None))
    assert test_features.shape[0] > 0


def test_checkpoint_5_prediction_has_one_value_per_test_example():
    model, test_features, test_target = trained_model()
    predictions = require_attempt(lambda: make_predictions(model, test_features))
    assert np.asarray(predictions).shape == test_target.shape


def test_checkpoint_6_returns_bounded_accuracy_and_square_matrix():
    model, test_features, test_target = trained_model()
    predictions = require_attempt(lambda: make_predictions(model, test_features))
    accuracy, matrix = require_attempt(
        lambda: evaluate_predictions(test_target, predictions)
    )
    assert 0.0 <= accuracy <= 1.0
    assert matrix.ndim == 2
    assert matrix.shape[0] == matrix.shape[1]
