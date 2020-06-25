from avaliacao.models import Avaliacao
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from .serializer import AvaliacaoSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.generics import UpdateAPIView
from rest_framework import status
#from rest_framework.authtoken.models import Token


@api_view(['GET',])
def avaliacao_views(request):
    """
    pt:
    função para listar todas as avaliações.

    en:
    function to list all evaluations.
    """
    if request.method == 'GET':
        avaliacao = Avaliacao.objects.all()
        serializer = AvaliacaoSerializer(avaliacao, many=True)
        return Response(serializer.data)


class AvaliacaoView(APIView):
    """
    Classe para avaliar um Hotel.
    Class to evaluate a Hotel.
    """
    authentication_classes = []
    permission_classes = []
    def post(self, request):
        serializer=AvaliacaoSerializer(data=request.data)
    
        User=serializer.initial_data['User']
        hotel=serializer.initial_data['hotel']
        validate_user_hotel=validate_to_rank(User, hotel)
    
        if validate_user_hotel==None:
            if serializer.is_valid():
                Avaliacao=serializer.save()
                return Response(status=status.HTTP_201_CREATED)
            else:
                data=serializer.errors
                return Response(data,status=status.HTTP_400_BAD_REQUEST)
        else:
            data=validate_user_hotel
            return Response(data, status=status.HTTP_405_METHOD_NOT_ALLOWED )


def validate_to_rank(User, hotel):
    """
    pt:
    A função validate_to_rank verifica se um determinado usuário
    já classificou um determinado hotel.

    en: 
    The validate_to_rank function checks whether a given
    user has already rated a given hotel.
    """ 
    avaliacao = None
    data={}
    try:
        avaliacao=Avaliacao.objects.filter(User=User, hotel=hotel)
    except Avaliacao.DoesNotExist:
        return None
    if len(avaliacao) != 0:
        data["Error"]="Hotel ja classificado"
        return data
    


#avaliacao=Avaliacao.objects.filter(User=User)
#avaliacao1=Avaliacao.objects.filter(hotel=hotel)
#print(avaliacao.query)
#print(len(avaliacao))
#print(avaliacao1.query)