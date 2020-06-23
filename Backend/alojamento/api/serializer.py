from rest_framework import serializers
from alojamento.models import Alojamento

class AlojamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alojamento
        fields ='__all__'