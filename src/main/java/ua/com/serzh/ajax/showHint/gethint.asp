<%
response.expires=-1
dim a(30)
'Заполнение массива именами
a(1)="Аня";
a(2)="Алена";
a(3)="Александр";
a(4)="Алексей";
a(5)="Артем";
a(6)="Борис";
a(7)="Василий";
a(8)="Григорий";
a(9)="Геннадий";
a(10)="Дмитрий";
a(11)="Елена";
a(12)="Жанна";
a(13)="Зинаида";
a(14)="Илья";
a(15)="Иннокентий";
a(16)="Кирилл";
a(17)="Константин";
a(18)="Лера";
a(19)="Мария";
a(20)="Николай";
a(21)="Оксана";
a(22)="Петр";
a(23)="Равиль";
a(24)="Радик";
a(25)="Сергей";
a(26)="Савва";
a(27)="Тамара";
a(28)="Тамила";
a(29)="Таисия";
a(30)="Ульяна";

'получение параметра q из адресной строки URL
q=ucase(request.querystring("q"))

'поиск подсказок из массива, если длина q>0
if len(q)>0 then
  hint=""
  for i=1 to 30
    if q=ucase(mid(a(i),1,len(q))) then
      if hint="" then
        hint=a(i)
      else
        hint=hint & " , " & a(i)
      end if
    end if
  next
end if

'Вывод "нет вариантов" если не было найдено подходящего предложения
'или вывод значений-подсказок
if hint="" then
  response.write("нет вариантов")
else
  response.write(hint)
end if
%>