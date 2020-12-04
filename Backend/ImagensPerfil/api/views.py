from ImagensPerfil.models import Imagens
from .serializer import ImgPerfilSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404

class GetImgList(APIView):
    def get(self, request): 
        perfilhome = Imagens.objects.all().select_related('hotel_owner')
        #perfilhome = Imagens.objects.all()
        serializer = ImgPerfilSerializer(perfilhome, many=True)
        print(serializer, serializer.data)
        return Response(serializer.data)

    def post(self, request, format=None): #function to create a Event
        serializer=ImgPerfilSerializer(data=request.data)
        if serializer.is_valid():
            Imagens=serializer.save()
            data={}
            data["Response"]="registro salvo com sucesso"
            return Response(data,status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


