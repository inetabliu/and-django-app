# Generated by Django 3.2.6 on 2021-08-17 16:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('shoes', '0001_initial'),
        ('size', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Variant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shoe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shoes.shoe')),
                ('size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='size.size')),
            ],
        ),
    ]
