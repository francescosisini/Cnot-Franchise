
import random
import pygame
from .actor import MAGENTA, WHITE, Actor
import math

class Caterina(Actor):
    '''Classe per Caterina.'''
    
    def __init__(self, _screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y):
        '''Inizializza il drone agente.'''
        super().__init__(_screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y)
        self.angle = 0
        self.rotation_angle = 10

    def draw(self):
        '''Disegna Caterina.'''
        if self.is_active():
            pygame.draw.circle(self.screen, MAGENTA, [self.center_x, self.center_y], self.radius)
            pygame.draw.circle(self.screen, WHITE, [self.center_x, self.center_y], self.radius + 5, 2)
