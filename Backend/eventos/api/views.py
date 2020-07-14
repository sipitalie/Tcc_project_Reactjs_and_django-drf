from eventos.models import Evento
from .serializer import EventoSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class EventList(APIView):
    """
    List all Events, or create a new Events.
    """
    def get(self, request, format=None): #function to list all Events
        evento = Evento.objects.all()
        serializer = EventoSerializer(evento, many=True)
        return Response(serializer.data)


    #apermission_classes=(IsAuthenticated,)
    #authentication_classes = (TokenAuthentication,)
    def post(self, request, format=None): #function to create a Event
        serializer=EventoSerializer(data=request.data)
        if serializer.is_valid():
            Evento=serializer.save()
            data={}
            data["Response"]="registro salvo com sucesso"
            return Response(data,status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class EventDetail(APIView):
    """
    Retrieve, update or delete a Event instance.
    """
     
    def get_object(self, pk):
        try:
            return Evento.objects.get(pk=pk)
        except Evento.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None): #fncution to Retrieve a Event instance
        evento = self.get_object(pk)
        serializer = EventoSerializer(evento)
        return Response(serializer.data)

    #permission_classes=(IsAuthenticated,)
    #authentication_classes = (TokenAuthentication,)
    def put(self, request, pk, format=None): #fncution to update a Event instance
        evento = self.get_object(pk)
        serializer = EventoSerializer(evento, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None): #fncution to delete a Event instance
        
        evento = self.get_object(pk)
        evento.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
