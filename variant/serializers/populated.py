from size.serializers import SizeSerializer
from .common import VariantSerializer


class PopulatedVariantSerializer(VariantSerializer):
    size = SizeSerializer()
