from account.models import Account
from alojamento.models import Alojamento
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from .serializer import AlojamentoSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
#from rest_framework.authtoken.models import Token
from rest_framework.generics import UpdateAPIView
from rest_framework import status


@api_view(['GET',])
def alojamentos(request):
    """
    função para listar todos os hotel
    """
    if request.method == 'GET':
        alojamentos = Alojamento.objects.all()
        serializer = AlojamentoSerializer(alojamentos, many=True)

        return Response(serializer.data)

class RegisterAlojamentoView(APIView):
    """
    Class para fazer o cadastro de um Hotel
    """
    authentication_classes = []
    permission_classes = []
    def post(self, request):
        data ={}
        body= request.data
        serializer=AlojamentoSerializer(data=request.data)
        if serializer.is_valid():
            Alojamento=serializer.save()
            data['response']='cadastro feito com sucesso'
            #data['email']=account.email
            #data['username']=account.username
            #data['token']=Token.objects.get(user=account).key

            return Response(data, status=status.HTTP_201_CREATED)
            #token=Token.objects.get(user=account).key
            #data['token']=token
        else:
            data=serializer.errors
            return Response(data,status=status.HTTP_400_BAD_REQUEST)
        
        #return Response(body)
       
"""

"nome": "Hotel siga",
    "Type_Alojamento": "Hotel",
    "Estrela": 3,
    "pais": "Angola",
    "Provincia": "Benguela",
    "cidade": "Lobito",
    "linha": "rua 10",
    "latitude": 2121244.0,
    "longitude": 1135342441.0,
    "owner": 2,
    "comentarios": null
"""
