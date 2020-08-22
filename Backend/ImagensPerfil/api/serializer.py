from ImagensPerfil.models import Imagens
from rest_framework.serializers import ModelSerializer 

 
class ImgPerfilSerializer(ModelSerializer):
    class Meta:
        model = Imagens
        fields = '__all__'
        #fields = ['id','img','Quarto_Solteiro','perfil', 
        # 'Quarto_Duplo', 'Quarto_Casal', 'Outros']



        

