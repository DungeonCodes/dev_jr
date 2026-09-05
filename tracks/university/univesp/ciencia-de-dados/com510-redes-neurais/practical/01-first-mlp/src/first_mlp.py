"""Tentativa do aluno para o PRACTICAL 01 — FIRST MLP.

AI_MODE=off: implemente um checkpoint por vez e consulte a documentação indicada.
"""

import numpy as np


def load_dataset() -> tuple[np.ndarray, np.ndarray]:
    """Checkpoint 1: carregue o dataset e retorne features e target."""
    # TODO: implemente sua tentativa.
    raise NotImplementedError("Implemente o checkpoint 1.")


def split_train_test(
    features: np.ndarray, target: np.ndarray
) -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
    """Checkpoint 2: separe features e target em treino e teste."""
    # TODO: implemente sua tentativa.
    raise NotImplementedError("Implemente o checkpoint 2.")


def standardize_features(
    train_features: np.ndarray, test_features: np.ndarray
) -> tuple[np.ndarray, np.ndarray]:
    """Checkpoint 3: padronize treino e teste sem leakage."""
    # TODO: implemente sua tentativa.
    raise NotImplementedError("Implemente o checkpoint 3.")


def create_model() -> object:
    """Checkpoint 4: crie uma MLP pequena e reproduzível."""
    # TODO: implemente sua tentativa.
    raise NotImplementedError("Implemente o checkpoint 4.")


def train_model(
    model: object, train_features: np.ndarray, train_target: np.ndarray
) -> object:
    """Checkpoint 4: treine o modelo com os dados de treino."""
    # TODO: implemente sua tentativa.
    raise NotImplementedError("Implemente o checkpoint 4.")


def make_predictions(model: object, test_features: np.ndarray) -> np.ndarray:
    """Checkpoint 5: produza previsões para o conjunto de teste."""
    # TODO: implemente sua tentativa.
    raise NotImplementedError("Implemente o checkpoint 5.")


def evaluate_predictions(
    test_target: np.ndarray, predictions: np.ndarray
) -> tuple[float, np.ndarray]:
    """Checkpoint 6: calcule accuracy e matriz de confusão."""
    # TODO: implemente sua tentativa.
    raise NotImplementedError("Implemente o checkpoint 6.")
