import math

# Colori
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GRAY = (150, 150, 150)
RED = (255, 0, 0)
MAGENTA = (255, 0, 255)
COLORS = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (255, 255, 0), (0, 255, 255)]
CYAN = (0, 255, 255)

class Actor:
    '''Classe base per gli attori del gioco.'''
    def __init__(self, _screen, _color, _radius, _center_x, _center_y, _speed_x, _speed_y):
        self.screen = _screen
        self.color = _color
        self.radius = _radius
        self.center_x = _center_x
        self.center_y = _center_y
        self.speed_x = _speed_x
        self.speed_y = _speed_y
        self.angle = 0
        self.rotation_angle = 1
        self.active = True
        self.left = False
        self.right = False
        self.up = False
        self.down = False
        self.width, self.heigth = _screen.get_size()

    def is_active(self):
        '''Restituisce True se l'attore è attivo, False altrimenti.'''
        return self.active

    def reset_active(self):
        '''Disattiva l'attore.'''
        self.active = False

    def set_active(self):
        '''Attiva l'attore.'''
        self.active = True

    def collide(self, other_actor):
        '''Restituisce True se l'attore collide con un altro attore.'''
        return math.hypot(self.center_x - other_actor.center_x, self.center_y - other_actor.center_y) < self.radius + other_actor.radius
