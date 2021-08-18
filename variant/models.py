from django.db import models
from shoes.models import Shoe
from size.models import Size


class Variant(models.Model):
    quantity = models.IntegerField()
    size = models.ForeignKey(Size, related_name="variants",
                             on_delete=models.CASCADE)
    shoe = models.ForeignKey(Shoe, related_name="variants",
                             on_delete=models.CASCADE)

    def __str__(self):
        return f"Shoe {self.shoe} - EU {self.size} - quantity - {self.quantity}"
