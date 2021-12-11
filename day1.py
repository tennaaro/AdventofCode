def counting(data):
  counter = 0
  for idx, val in enumerate(data):
    try:
      if int(data[idx]) < int(data[idx + 1]):
        print(data[idx], type(data[idx]))
        counter = counter + 1
    except:
      print("first number")
  return counter

input_file = open('input.txt', 'r')
content = input_file.read()
list_file = content.split('\n')

if __name__ == "__main__":
  print(counting(list_file))