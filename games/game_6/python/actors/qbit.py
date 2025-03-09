import random
import pygame
from .actor import CYAN, WHITE, Actor
from .agente import CYAN, Agente
import math


class QBit(Agente):
    '''Classe per i qubit.'''
    def __init__(self, _screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y, _drone, _agente):
        super().__init__(_screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y, _drone)
        self.agente = _agente
        self.angle = 0
        self.rotation_angle = 10

    def draw(self):
        points = [
            (self.center_x + self.radius * math.cos(math.radians(self.angle)),       self.center_y + self.radius * math.sin(math.radians(self.angle))),
            (self.center_x + self.radius * math.cos(math.radians(self.angle + 120)), self.center_y + self.radius * math.sin(math.radians(self.angle + 120))),
            (self.center_x + self.radius * math.cos(math.radians(self.angle + 240)), self.center_y + self.radius * math.sin(math.radians(self.angle + 240)))
        ]
        pygame.draw.polygon(self.screen, WHITE, points)

    def move(self):
        '''Muove il qubit.'''
        self.center_y += self.speed_y
        self.angle = (self.angle + self.rotation_angle) % 360
        if self.center_y > self.heigth:
            return True, False, False
        if self.collide(self.drone):
            return False, False, True
        if self.agente.is_active() and self.collide(self.agente):
            return False, True, False
        return False, False, False
