from variant.serializers.populated import PopulatedVariantSerializer
from .common import ShoeSerializer


class PopulatedShoeSerializer(ShoeSerializer):
    variants = PopulatedVariantSerializer(many=True)
