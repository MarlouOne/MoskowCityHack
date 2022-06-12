import pandas as pd
# import requests  # Библиотека requests что бы обращаться к сайтам

# Импортируем необходимые библиотеки

url = 'https://sociate.ru/spots/view/?categories=130&min_users=100000&provider=vkontakte&ordering=users_desc&format=csv'
df = pd.read_csv(url)

# df.to_csv('Scrap/data_vk.csv', index=False,)
df.to_csv(r'C:\Users\major\Documents\GitHub\MoskowCityHack\RTG_Python\Scrap\data_vk.csv')