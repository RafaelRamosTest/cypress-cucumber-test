@home
Feature: Acessar site Cielo
  
@bannerHome 
Scenario: Acessar a home da Cielo e validar informacoes do banner
   Given eu acesso o site Cielo
   Then o banner deve exibir o título principal "A maquininha que faz mais, por muito menos"
   And eu devo visualizar o banner

@taxasHome
Scenario: Acessar a home da Cielo e validar taxas
   Given eu acesso o site Cielo
   Then o sistema deve exibir as seguintes taxas comerciais em destaque:
    | modalidade      | valor  |
    | Pix             | 0%     |
    | Débito          | 1,19%  |
    | Crédito à vista | 3,45%  |
    | Parcelado 3x    | 7,32%  |

@ofertasHome
Scenario: Acessar a home da Cielo e validar ofertas
   Given eu acesso o site Cielo
   Then o botao "Peça agora" deve estar visivel e direcionar para as ofertas

@carrosselMaquininhas
Scenario: Validar aba "Maquininhas" no carrossel de produtos
  Given eu acesso o site Cielo
  When eu seleciono a opção "Maquininhas" no carrossel de produtos
  Then o carrossel deve exibir o título "Pague uma única vez e não se preocupe com a mensalidade."
  And o botão "Seja Cielo" deve estar visível

@carrosselMaquininhaCelular
Scenario: Validar aba "Maquininha no celular" no carrossel de produtos
  Given eu acesso o site Cielo
  When eu seleciono a opção "Maquininha no celular" no carrossel de produtos
  Then o carrossel deve exibir o título "Transforme o celular em maquininha:"
  And o botão "Cadastre-se grátis" deve estar visível

@carrosselLinkPagamento
Scenario: Validar aba "Link de Pagamento" no carrossel de produtos
  Given eu acesso o site Cielo
  When eu seleciono a opção "Link de Pagamento" no carrossel de produtos
  Then o carrossel deve exibir o título "A solução completa para vender online sem precisar de site."
  And o botão "Conferir soluções" deve estar visível

@carrosselEcommerce
Scenario: Validar aba "E-commerce" no carrossel de produtos
  Given eu acesso o site Cielo
  When eu seleciono a opção "E-commerce" no carrossel de produtos
  Then o carrossel deve exibir o título "Venda online com mais conversão e segurança"
  And o botão "Seja Cielo" deve estar visível

@carrosselSolucoesPersonalizadas
Scenario: Validar aba "Soluções personalizadas" no carrossel de produtos
  Given eu acesso o site Cielo
  When eu seleciono a opção "Soluções personalizadas" no carrossel de produtos
  Then o carrossel deve exibir o título "Fatura mais de R$ 1,2 milhões por mês?"
  And o botão "Falar com especialista" deve estar visível
