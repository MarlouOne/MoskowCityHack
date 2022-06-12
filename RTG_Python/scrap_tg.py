import json

import pandas as pd
import requests  # Библиотека requests что бы обращаться к сайтам
from bs4 import BeautifulSoup  # Библиотека BS для логики сбора информац\ии

# Импортируем необходимые библиотеки

url = 'https://telega.in/catalog/business_and_startups?order%5Bsort%5D=user_count&order%5Btype%5D=DESC'
page = requests.get(url)
# print(page.status_code)

soup = BeautifulSoup(page.text, "html.parser")
allNews = soup.find('div', class_='catalog_channels')
list_data = []
for i in allNews:
    # print(len(allNews))
    try:
        name = i.find('span', class_='font-18px desck bold channel_title').text
        subs = i.find('span', class_='font-18px desck color-headline').text + '00'
        view = i.find('span', class_='font-18px desck color-headline js-view').text[:-1] + '00'
        prize = i.find('div', class_='current_price text_price js-price').text[:-1]
        er = i.find('span', class_='font-18px desck color-headline js-err').text[:-1]
        cpv = i.find('span', class_='amount ru').text

        name = name.replace(' ','')[:6]
        view = str(view).replace('.','')
        subs = str(subs).replace(' ','')
        prize = str(prize).replace(' ','')
        list_data.append(
            {   'name':name,
                'subs': subs,
                'view': view,
                'prize': prize,
                'er': er,
                'cpv': cpv
            }
        )
    except:  # Обработка исключений
        pass


def save_json(data, path):
    with open(path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

save_json(list_data, 'data_tg.json')
