from rest_framework import serializers
from .models import Size


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['uk_size', 'eu_size']
