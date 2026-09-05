"""Testes de comportamento do desafio Hopfield, sem prescrever a implementação."""

import sys
from pathlib import Path

import numpy as np
import pytest

LAB_SRC = Path(__file__).parents[1] / "labs" / "week-06-hopfield" / "src"
sys.path.insert(0, str(LAB_SRC))

from hopfield import HopfieldNetwork, as_bipolar_patterns


def require_attempt(action):
    try:
        return action()
    except NotImplementedError as error:
        pytest.skip(str(error))


def test_checkpoint_1_produces_bipolar_matrix_with_expected_shape():
    patterns = [[1, -1, 1], [-1, 1, -1]]
    result = require_attempt(lambda: as_bipolar_patterns(patterns, size=3))
    assert result.shape == (2, 3)
    assert set(np.unique(result)).issubset({-1, 1})


def test_checkpoint_2_creates_square_weight_matrix():
    network = HopfieldNetwork(size=3)
    assert network.weights.shape == (3, 3)


def trained_network():
    network = HopfieldNetwork(size=4)
    patterns = [[1, 1, -1, -1], [1, -1, 1, -1]]
    require_attempt(lambda: network.train(patterns))
    return network, patterns


def test_training_produces_symmetric_weights_with_zero_diagonal():
    network, _ = trained_network()
    assert np.allclose(network.weights, network.weights.T)
    assert np.allclose(np.diag(network.weights), 0)


def test_stored_pattern_is_stable_after_recovery_attempt():
    network, patterns = trained_network()
    recovered = require_attempt(lambda: network.predict(patterns[0], max_steps=8))
    assert np.array_equal(recovered, np.asarray(patterns[0]))


def test_lightly_corrupted_pattern_can_recover_a_stored_memory():
    network, patterns = trained_network()
    corrupted = [1, 1, 1, -1]
    recovered = require_attempt(lambda: network.predict(corrupted, max_steps=8))
    assert any(np.array_equal(recovered, np.asarray(pattern)) for pattern in patterns)


def test_prediction_records_no_more_than_max_steps():
    network, patterns = trained_network()
    require_attempt(lambda: network.predict(patterns[0], max_steps=1))
    assert network.last_steps <= 1
