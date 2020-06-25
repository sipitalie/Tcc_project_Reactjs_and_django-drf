from rest_framework import serializers
from avaliacao.models import Avaliacao

class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avaliacao
        fields ='__all__'
