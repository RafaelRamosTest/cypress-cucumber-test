@home
Feature: Acessar site Cielo
  
@bannerHome 
Scenario: Acessar a home da Cielo e validar informações do banner
   Given eu acesso o site Cielo
   Then o banner deve exibir o título principal "A maquininha que faz mais, por muito menos"
   And eu devo visualizar o banner

@taxasHome
Scenario: Acessar a home da Cielo e validar taxas
   Given eu acesso o site Cielo
   Then deve conter as taxas comerciais atualizadas:
    | modalidade      | valor  |
    | Pix             | 0%     |
    | Débito          | 1,19%  |
    | Crédito à vista | 3,45%  |
    | Parcelado 3x    | 7,32%  |

@ofertasHome
Scenario: Acessar a home da Cielo e validar ofertas
   Given eu acesso o site Cielo
   Then o botao "Peça agora" deve estar visivel e direcionar para as ofertas