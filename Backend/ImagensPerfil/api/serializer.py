from ImagensPerfil.models import Imagens
from rest_framework.serializers import ModelSerializer 
from rest_framework import serializers
 
class ImgPerfilSerializer(ModelSerializer):
    img = serializers.ImageField(max_length=None, use_url=True)
    class Meta:
        model = Imagens
        #fields = ['id','img']
        fields = '__all__'

    #img = serializers.FileField(use_url=True)
        #fields = ['id','img']
        # 'Quarto_Duplo', 'Quarto_Casal', 'Outros'



        

