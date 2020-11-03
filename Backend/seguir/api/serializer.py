from rest_framework import serializers
from seguir.models import Seguir

class SeguirSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seguir
        fields ='__all__'
        
