Algorithme triInsertion(tab)
    n := longueur(tab)

    
    Pour i de 1 à n - 1 faire
        valeur := tab[i] 
        j := i - 1

        
        Tant que j >= 0 ET tab[j] > valeur faire
            tab[j + 1] := tab[j] 
            j := j - 1
        Fin Tant que

       
        tab[j + 1] := valeur
    Fin Pour
Fin Algorithme
