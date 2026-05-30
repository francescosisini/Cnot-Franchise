import random
import pygame
from .actor import CYAN, Actor
import math


class Agente(Actor):
    '''Classe per il drone agente.'''
    def __init__(self, _screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y, _drone):
        '''Inizializza il drone agente.'''
        super().__init__(_screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y)
        self.drone = _drone
        self.angle = 0
        self.rotation_angle = 10

    def move_to(self):
        '''Muove il drone agente verso il drone CH4.'''
        if not self.is_active():
            self.center_x = random.randint(50, self.width - 50)
            self.center_y = 100
            return
        if self.center_x < self.drone.center_x:
            self.center_x += self.speed_x
        elif self.center_x > self.drone.center_x:
            self.center_x -= self.speed_x
        if self.center_y < self.drone.center_y:
            self.center_y += self.speed_y
        elif self.center_y > self.drone.center_y:
            self.center_y -= self.speed_y
        self.angle += self.rotation_angle

    def draw(self):
        '''Disegna il drone agente.'''
        pygame.draw.circle(self.screen, self.color, [self.center_x, self.center_y], 12)
        for i in range(4):
            angle = i * (360 // 4) + self.angle
            dx = self.radius * math.cos(math.radians(angle))
            dy = self.radius * math.sin(math.radians(angle))
            pygame.draw.circle(self.screen, CYAN, (int(self.center_x + dx), int(self.center_y + dy)), 8)
