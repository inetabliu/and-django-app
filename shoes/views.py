from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Shoe
from rest_framework.exceptions import NotFound
from shoes.serializers import ShoeSerializer


class ShoeListView(APIView):

    def get(self, _request):
        shoes = Shoe.objects.all()
        serialized_shoes = ShoeSerializer(shoes, many=True)
        return Response(serialized_shoes.data, status=status.HTTP_200_OK)

    def post(self, request):
        shoe_to_add = ShoeSerializer(data=request.data)
        if shoe_to_add.is_valid():
            shoe_to_add.save()
            return Response(shoe_to_add.data, status=status.HTTP_201_CREATED)
        return Response(shoe_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ShoeDetailView(APIView):

    def get_shoes(self, pk):
        try:
            return Shoe.objects.get(pk=pk)
        except Shoe.DoesNotExist:
            raise NotFound(
                detail="Shoes does not exist in the database")

    def get(self, _request, pk):
        shoes = self.get_shoes(pk=pk)
        serialized_shoes = ShoeSerializer(shoes)
        return Response(serialized_shoes.data, status=status.HTTP_200_OK)
