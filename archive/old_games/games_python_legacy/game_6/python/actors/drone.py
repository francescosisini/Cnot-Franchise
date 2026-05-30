
import pygame
from .actor import Actor
import math

from .actor import CYAN

class Drone(Actor):
    '''Classe per il drone CH4.'''
    
    def __init__(self, _screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y):
        '''Inizializza il drone CH4.'''
        super().__init__(_screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y)
        self.angle = 0
        self.rotation_angle = 10

    def move_left(self):
        '''Sposta l'attore a sinistra.'''
        self.center_x = max(self.center_x - self.speed_x, self.radius)
        self.angle += self.rotation_angle

    def move_right(self):
        '''Sposta l'attore a destra.'''
        self.center_x = min(self.center_x + self.speed_x, self.width - self.radius)
        self.angle -= self.rotation_angle

    def move_up(self):
        '''Sposta l'attore in alto.'''
        self.center_y = max(self.center_y - self.speed_y, self.radius)
        self.angle += self.rotation_angle

    def move_down(self):
        '''Sposta l'attore in basso.'''
        self.center_y = min(self.center_y + self.speed_y, self.heigth - self.radius)
        self.angle -= self.rotation_angle

    def event_parser(self, events):
        '''Analizza gli eventi di gioco.'''
        for event in events:
            if event.type == pygame.QUIT:
                return True
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    self.left = True
                elif event.key == pygame.K_RIGHT:
                    self.right = True
                elif event.key == pygame.K_UP:
                    self.up = True
                elif event.key == pygame.K_DOWN:
                    self.down = True
            elif event.type == pygame.KEYUP:
                if event.key == pygame.K_LEFT:
                    self.left = False
                elif event.key == pygame.K_RIGHT:
                    self.right = False
                elif event.key == pygame.K_UP:
                    self.up = False
                elif event.key == pygame.K_DOWN:
                    self.down = False
        if self.left:
            self.move_left()
        if self.right:
            self.move_right()
        if self.up:
            self.move_up()
        if self.down:
            self.move_down()

    def draw(self):
        '''Disegna il drone CH4.'''
        pygame.draw.circle(self.screen, self.color, [self.center_x, self.center_y], 12)
        for i in range(4):
            angle = i * (360 // 4) + self.angle
            dx = self.radius * math.cos(math.radians(angle))
            dy = self.radius * math.sin(math.radians(angle))
            pygame.draw.circle(self.screen, CYAN, (int(self.center_x + dx), int(self.center_y + dy)), 8)
