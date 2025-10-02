moge zaladowac komponent 
zamockowac dane
wgrac dane do elementu i jak wyswietli mi sie konkretna odpowiedz to znaczy ze przeszlo


co testować ?

check if component render
czy renderuje z propsami i czy poprawnie renderuje te propsy
sprawdzenie czy props wyrenderuje nam konkretny tekst lub element
czy renderuje sie w roznych stanach(logout loigin na menu bar)
czy reaguje na eventy? buttony swithc inne elementy html itp
to co sie wyswietli sprawdzic czy sie wyswietliło


nie testowac komponentow ktore juz istnieją lub zewnetrznych
testować żeczy które sa ważne z punktu widzenia usera


ktore metody w pierwszej kolejnosci(test powinien przypominac interakcje przez usera):
getByRole
getByLabelText
getByPlaceholderText
getByText
getByDisplayValue
getByAltText (rozne dla roznych urzadzeń, nie widoczne dla uzytkownika)
getByTitle
getByTestId (najmniej polecana metoda, bo nie przypomina interakcji usera)

//all sufixes are same - get, query, find and are Role, LabelText, PlceholderText, Text, DisplayValue, AltText, Title, TestId
  const startLearningButton = await screen.findByRole("button", {


