# Generated by Django 3.0.5 on 2020-06-25 08:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('alojamento', '0005_remove_alojamento_comentarios'),
        ('avaliacao', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='avaliacao',
            name='hotel',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='alojamento.Alojamento'),
            preserve_default=False,
        ),
    ]
