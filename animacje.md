Oczywiście, możesz osiągnąć taki efekt animacji za pomocą CSS i pseudo-klasy `:hover`. Oto przykład:

```css
.animate-tilt {
  transition: transform 1s ease-in-out;
}

.animate-tilt:hover {
  transform: rotate(-5deg);
  transition: transform 0.5s ease-in-out;
}

.animate-tilt:hover::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(5deg);
  transition: transform 0.5s ease-in-out;
  animation: return 1s 0.5s forwards;
}

@keyframes return {
  to {
    transform: rotate(0deg);
  }
}
```

W powyższym przykładzie zastosowano klasę `animate-tilt` dla elementu, który ma być animowany. Po najechaniu myszką na ten element, najpierw obraca się delikatnie w lewo, a następnie animuje się powrót do normalnej pozycji po 1 sekundzie.

Elementowi dodano pseudo-klasę `::after`, która pozwala na dodanie efektu plynnej animacji w prawo. Element ten jest przezroczysty i ma taki sam rozmiar jak animowany element, a następnie obraca się o 5 stopni w prawo. Animacja powrotu jest realizowana za pomocą `@keyframes`, która pozwala płynnie wrócić do początkowej rotacji.

Pamiętaj, że warto dostosować kod do swoich potrzeb, takich jak selektor i inne właściwości elementu, na którym chcesz zastosować tę animację.