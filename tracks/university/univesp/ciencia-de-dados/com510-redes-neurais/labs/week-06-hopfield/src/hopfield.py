"""Área de tentativa do aluno para o lab de Hopfield.

AI_MODE=off: implemente um checkpoint por vez. Não procure solução em outro lugar.
"""

import numpy as np


def as_bipolar_patterns(patterns: object, size: int) -> np.ndarray:
    """Checkpoint 1: valide/converta padrões para uma matriz bipolar de shape (m, size)."""
    raise NotImplementedError("Implemente o checkpoint 1.")


class HopfieldNetwork:
    """Uma API pequena para explorar memória associativa."""

    def __init__(self, size: int) -> None:
        """Checkpoint 2: guarde o tamanho e crie uma matriz W inicial."""
        self.size = size
        self.weights = np.zeros((size, size), dtype=float)
        self.last_steps = 0

    def train(self, patterns: object) -> None:
        """Checkpoint 3: aprenda pesos a partir de padrões bipolares."""
        raise NotImplementedError("Implemente o checkpoint 3.")

    def update_once(self, state: object) -> np.ndarray:
        """Checkpoint 5: produza o próximo estado a partir de W e do estado atual."""
        raise NotImplementedError("Implemente o checkpoint 5.")

    def predict(self, pattern: object, max_steps: int = 10) -> np.ndarray:
        """Checkpoints 4, 6 e 7: recupere um padrão ou pare em max_steps."""
        raise NotImplementedError("Implemente os checkpoints 4, 6 e 7.")
