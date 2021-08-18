from django.db import models
from django.db.models.fields import FloatField, IntegerField


class Size(models.Model):
    uk_size = FloatField(unique=True)
    eu_size = IntegerField(unique=True)

    def __str__(self):
        return f"UK {self.uk_size} - EU {self.eu_size}"
