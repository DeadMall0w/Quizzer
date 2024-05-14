import json
import os
import glob


def get_quiz_index():
    json_files = glob.glob('Quizs/*.json')
    bigger_index = 1
    for json_file in json_files:
        if int(json_file[10]) > bigger_index:
            bigger_index = int(json_file[10])

    return bigger_index+1

def convert_quiz(file_path, quiz_name):
    data = {
        "type": "traduction",
        "quizName": quiz_name,
        "vocabulaire": []
    }

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        i = 0
        for line in lines:
            print(i)
            i+=1
            langue1, langue2 = line.strip().split(':')
            item = {
                "langue1": langue1,
                "langue2": langue2
            }
            data["vocabulaire"].append(item)

    quizIndex = get_quiz_index()
    with open(f'Quizs/quiz{quizIndex}.json', 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)
    print(f"File saved as 'Quizs/quiz{quizIndex}' !")

file_path = input("Enter base file path: ")
quiz_name = input("Enter quiz name: ")

convert_quiz(file_path, quiz_name)