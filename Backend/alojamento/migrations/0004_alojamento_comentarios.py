# Generated by Django 3.0.5 on 2020-06-20 18:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('comentarios', '0001_initial'),
        ('alojamento', '0003_auto_20200620_1901'),
    ]

    operations = [
        migrations.AddField(
            model_name='alojamento',
            name='comentarios',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='comentarios.Comentario'),
        ),
    ]
