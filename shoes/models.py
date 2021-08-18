from django.db import models

# Create your models here.

BRAND_CHOICES = [
    ('Nike', 'Nike'),
    ('Adidas', 'Adidas'),
    ('Reebok', 'Reebok'),
    ('Vans', 'Vans'),
    ('Superga', 'Superga'),
    ('DC', 'DC')
]


class Shoe(models.Model):
    brand = models.CharField(
        max_length=50, choices=BRAND_CHOICES, default='Nike')
    model_name = models.CharField(max_length=200, unique=True)
    picture = models.ImageField(default=None, upload_to='images/')
    price = models.FloatField(default=None)

    def __str__(self):
        return f"{self.brand} - {self.model_name}"
