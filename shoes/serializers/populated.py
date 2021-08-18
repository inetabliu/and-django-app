from variant.serializers.common import VariantSerializer
from .common import ShoeSerializer


class PopulatedShoeSerializer(ShoeSerializer):
    variants = VariantSerializer(many=True)
