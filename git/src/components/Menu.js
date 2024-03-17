import React from 'react'
import Navbar from './Navbar'
import Footer from  "./Footer"
import './Menu.css'
import i from './images/i.png'
import dose from './images/dose.jpeg'

export default function Menu() {
  return (
    <>
    <Navbar/>
    <div className="menu">
    <div className="select-container" value='1'>
        <h1 value='1'>Dosa specia optionties</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select className='select-box'>
            <  option value="1"></  option>
            <  option value="1"> masala  dosa   <i>55</i></  option>
            <  option value="1">PLAIN DOSA <i>50</i></  option>
            <  option value="1">TUPPA DOSA <i>60</i></  option>
            <  option value="1">SET DOSA <i>55</i></  option>
            <  option value="1">BUTTER MASALA DOSA <i>65</i></  option>
            <  option value="1">MYSORE MASALA DOSA <i>70</i></  option>
            <  option value="1">MYSORE PLAIN DOSA <i>65</i></  option>
            <  option value="1">CASHEW MASALA DOSA   <i>80</i></  option>
             <  option value="1">ONION MASALA DOSA <i>65</i> </  option>
             <  option value="1">BANG BANG DOSA <i>75</i></  option>
             <  option value="1">CHEESE MASALA DOSA <i>75</i></  option>
             <  option value="1">CHESE PLAIN DOSA <i>80</i></  option>
        </select>    
    </div>
    <div class="select-container">
        <h1>RAVA SPECIAL</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""></option>
            <option value="">RAVA MASALA DOSA <i>65</i></option>
            <option value=""> RAVA PLAIN DOSA  <i>60</i></option>
            <option value="">ONION RAVA MASALA <i>70</i></option>
            <option value="">ONION RAVA PLAIN <i>75</i></option>
            <option value="">BUTTER RAVA MASALA <i>70</i></option>
            <option value="">BUTTER RAVA PLAIN  <i>95</i></option>
            <option value=""> CASHEW RAVA MASALA <i>95</i></option>
            <option value=""> CASHEW RAVA PLAIN<i>90</i></option>
            <option value=""> CHEESE RAVA MASALA  <i>100</i></option>
             <option value=""> CHEESE RAVA PLAIN<i>95</i> </option>
        </select>
    </div>
    <div class="select-container">
        <h1>UTTAPPA'S</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""></option>
            <option value=""> ONION UTTAPA  <i>65</i></option>
            <option value="">TOMATO UTTAPA <i>65</i></option>
            <option value="">TOMATO CHEESE UTTAPPA <i>80</i></option>
            <option value="">CHEESE UTTAPPA<i>90</i></option>
            <option value=""> TAMOTO PANEER UTTAPPA<i>90</i></option>
            <option value="">PANEER CHILLI UTTAPPA <i>80</i></option>
            <option value="">PANEER UTTAPPA <i>85</i></option>
            <option value=""> SPRING UTTAPPA <i>75</i></option>
             <option value="">CASHEW UTTAPPA <i>95</i> </option>
             <option value="">CASHEW CHEESE UTTAPPA <i>95</i></option>
             <option value="">CASHEW TOMATO UTTAPPA <i>85</i></option>
             <option value="">COCONUT UTTAPPA<i>70</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>SOUP'S</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">TOMATO SOUP <i>80</i></option>
            <option value="">MANCHOW SOUP <i>80</i></option>
            <option value="">HOT & SOUR SOUP <i>100</i></option>
            <option value="">CREAM OF VEG SOUP<i>100</i></option>
            <option value="">CREAM OF MUSHROOM SOUP <i>100</i></option>
            <option value="">CREAM OF SWEET CORN <i>100</i></option>
            <option value=""> CHINESE SOUP<i>100</i></option>
            <option value="">RICE BALL SOUP <i>100</i></option>
            <option value=""> RICE NOODLE SOUP<i>100</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>CHINESE STARTERS</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">GOBI MANCHURIAN <i>100</i></option>
            <option value="">BABY CORN MANCHURIAN <i>110</i></option>
            <option value="">MUSHROOM MANCHURIAN<i>120</i></option>
            <option value="">PANEER MANCHURIAN<i>140</i></option>
            <option value="">PANEER MANCHURIAN <i>110</i></option>
            <option value="">GOBI CHILLI <i>110</i></option>
            <option value=""> BABY CORN CHILLI<i>120</i></option>
            <option value="">MUSHROOM CHILLI <i>140</i></option>
            <option value=""> PANEER CHILLI<i>110</i></option>
            <option value="">GOBI 65<i>110</i></option>
            <option value="">BABY CORN 65 <i>110</i></option>
            <option value="">MUSHRROM 65 <i>120</i></option>
            <option value="">PANEER 65 <i></i>150</option>
            <option value="">GOBI PEPPER CHILLI <i>120</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>NORTH INDIAN CURRIES</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">KAJU MASALA <i>190</i></option>
            <option value="">KAJU MUTTER <i>170</i></option>
            <option value=""> KADAI GOBI MUTTER<i>140</i></option>
            <option value="">  aloo GOBI MUTTER<i>140</i></option>
            <option value="">ALOO MASALA <i>140</i></option>
            <option value="">ALOO TOMATO MASALA <i>140</i></option>
            <option value="">TOMATO MUTTER MASALA<i>140</i></option>
            <option value="">TOMATO MASALA<i>140</i></option>
            <option value="">PALAK MUTTER <i>140</i></option>
            <option value="">MIXED VEG CURRY<i>140</i></option>
            <option value=""> KADAI VEG CURRY <i>140</i></option>
            <option value="">VEGETABLE KORMA <i>140</i></option>
            <option value="">VEG KOLHAPURI<i>140</i></option>
            <option value="">VEG HYDERABADI <i>140</i></option>
            <option value="">NAVARATHAN KORMA <i>160</i></option>
            <option value="">ALOO DUM HYDERABADIN <i>160</i></option>
            <option value="">VEG SHAHI KORMA  <i>160</i></option>
            <option value="">VEG MAKHANWALA <i>160</i></option> 
            <option value="">METHI MALAI MUTTER <i>160</i></option>
            <option value="">VEG BUTTER MASALA  <i>160</i></option>
            <option value="">VEG PEPPER MASALA <i>160</i></option>   
        </select>  
        
    </div>
    <div class="select-container">
        <h1>NAAN'S</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">NAAN <i>30</i></option>
            <option value="">BUTTER NAAAN <i>49</i></option>
            <option value="">GARLIIC NAAN<i>45</i></option>
            <option value="">GARLIC BUTTER NAAN<i>55</i></option>
            <option value="">MASALA NAAN <i>50</i></option>
            <option value="">MASALA NAAN <i>60</i></option>
            <option value="">MASALA BUTTER NAAN <i>50</i></option>
            <option value="">MIXED VEGETABLE NAAN <i>60</i></option>
            <option value="">MIXED VEG BUTTER NAAN <i>60</i></option>
            <option value="">PANEER CHEESE NAAN <i>65</i></option>
            <option value="">PANEER CHEESE BUTTER NAAN <i>75</i></option>
            <option value="">CHEESE BUTTER NAAN <i>75</i></option>
            <option value="">KASHMIRI NAAN <i>65</i></option>
            <option value="">ARABIC NAAN <i>70</i></option>        
        </select>
    </div>
    <div class="select-container">
        <h1>ROTI'S</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">TANDOORI ROTI <i>25</i></option>
            <option value="">BUTTER ROTI <i>35</i></option>
            <option value="">METHI BUTTER ROTI <i>40</i></option>
            <option value="">KULCHA <i>30</i></option>
            <option value="">BUTTER KULCHA  <i>40</i></option>
            <option value="">PANEER CHEESE KULCHA  <i>60</i></option>
            <option value=""> PANEER KULCHA <i>50</i></option>
            <option value="">PANEER BUTTER KULCHA  <i>60</i></option>
            <option value=""> ONION KULCHA <i>40</i></option>
            <option value=""> ONION BUTTER  KULCHA <i>50</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>PARATHA'S</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">ALOO PARATHA  <i>50</i></option>
            <option value="">MASALA PARATHA <i>60</i></option>
            <option value="">METHI PARATHA <i>60</i></option>
            <option value=""> PANEER PARATHA <i>70</i></option>
            <option value=""> BABY CORN CHEESE PARTATHA  <i>70</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>PULLAV & BIRIYANI DISHES </h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">VEGETABLE PULLAV  <i>130</i></option>
            <option value="">PANEER PULAV <i>150</i></option>
            <option value="">PEAS PULAV<i>130</i></option>
            <option value="">GOBI PULAV<i>130</i></option>
            <option value="">CASHEW PULAV <i>160</i></option>
            <option value="">KASHMIRI PULLAV  <i>160</i></option>
            <option value=""> NAVARATAN PULAV<i>160</i></option>
            <option value="">MUSHROOM CHILLI <i>140</i></option>
            <option value=""> GHEE RICE <i>120</i></option>
            <option value="">JEERA RICE<i>100</i></option>
            <option value="">DAAL KHICHDI <i>140</i></option>
            <option value="">PALAK RICE  <i>140</i></option>
            <option value="">CURD RICE  <i></i>90</option>
            <option value="">STEAMED RICE  <i>70</i></option>
            <option value="">vegetable biryani <i>150</i></option>
            <option value="">veg handy biryani<i>160</i></option>
            <option value="">hyderabadi biryani<i>170</i></option>
            <option value="">mushroom biryani <i>170</i></option>
            <option value="">mughlai biryani  <i>180</i></option>
            <option value=""> paneer nbiryani<i>190</i></option>
            <option value="">dum biryani <i>210</i></option>
            <option value=""> green spoon special cashew biryani <i>230</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>LUNCH THALI </h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">green spoon special thali   <i>80</i></option>
            <option value="">baby corn pepper chilli <i>130</i></option>
            <option value="">mushroom pepper chilli<i>140</i></option>
            <option value="">paneer pepper chilli<i>160</i></option>
            <option value="">gobi lemon chilli<i>120</i></option>
            <option value="">baby corn lemon chilli  <i>130</i></option>
            <option value=""> mushroom lemon chilli<i>1640</i></option>
            <option value="">paneer lemon chilli<i>160</i></option>
            <option value=""> gobi shangai <i>140</i></option>
            <option value="">schezwan gobi<i>140</i></option>
            <option value="">schezwan baby corn <i>150</i></option>
            <option value="">schezwan mushroom  <i>140</i></option>
            <option value="">schezwan paneer  <i></i>90</option>
            <option value="">gobi crispy  <i>70</i></option>
            <option value="">baby corn crispy <i>150</i></option>
            <option value="">mushroom crispy<i>160</i></option>
            <option value="">paneer crispy<i>170</i></option>
            <option value="">vegetable crispy <i>170</i></option>
            <option value="">gobi garlic  <i>180</i></option>
            <option value=""> mushroom garlic<i>190</i></option>
            <option value="">baby corn garlic <i>210</i></option>
            <option value="">paneer garlic <i>230</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>FRIED RICE</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">vegetable FRIED RICE <i>130</i></option>
            <option value="">mushroom FRIED RICE <i>150</i></option>
            <option value=""> baby corn FRIED RICE<i>150</i></option>
            <option value=""> paneer FRIED RICE<i>170</i></option>
            <option value=""> cheese FRIED RICE<i>180</i></option>
            <option value=""> mixed FRIED RICE<i>190</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>NOODLES</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">vegetable NOODLES <i>130</i></option>
            <option value="">paneer NOODLES <i>150</i></option>
            <option value="">mixed manchurian NOODLES <i>180</i></option>
            <option value="">schezwan paneer NOODLES <i>190</i></option>
            <option value=""> schezwan NOODLES  <i>150</i></option>
            <option value="">mushroom tikka NOODLES  <i>190</i></option>
            <option value=""> veg manchurian NOODLES <i>140</i></option>
            <option value="">mushroom  manchurian NOODLE  <i>140</i></option>
            <option value=""> baby corn manchurian noodles <i>140</i></option>
            <option value=""> paneer manchurian noodles<i>50</i></option>
            <option value="">dragon NOODLE  <i>140</i></option>
            <option value=""> chilli noodles <i>140</i></option>
            <option value=""> hongkong noodles<i>50</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>TANDOOR STARTERS </h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">PANEER TIKKA  <i>190</i></option>
            <option value="">PANEER  lasooni TIKKA <i>190</i></option>
            <option value="">PANEER mastani TIKKA <i>190</i></option>
            <option value="">PANEER pudina TIKKA<i>190</i></option>
            <option value="">PANEER kalmi TIKKA  <i>190</i></option>
            <option value="">PANEER hariyali TIKKA  <i>190</i></option>
            <option value="">PANEER sholayTIKKA  <i>200</i></option>
            <option value="">PANEER arabic TIKKA   <i>200</i></option>
            <option value="">  malai PANEER TIKKA <i>200</i></option>
            <option value=""> mushroom TIKKA<i>160</i></option>
            <option value="">nushroom methi TIKKA  <i>170</i></option>
            <option value="">baby corn TIKKA <i>160</i></option>
            <option value=""> baby corn methi TIKKA<i>170</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>MUSHROOM & KOFTHA DELICIOUS</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">MUSHROOM MASALA <i>150</i></option>
            <option value="">MUSHROOM TIKKA MASALA <i>170</i></option>
            <option value=""> MUSHROOM MUTTER<i>150</i></option>
            <option value=""> MUSHROOM KOLHAPURI<i>150</i></option>
            <option value=""> cheese FRIED RICE<i>180</i></option>
            <option value=""> MUSHROOM KADAI<i>160</i></option>
            <option value=""> malai koftha <i>170</i></option>
            <option value=""> veg koftha<i>160</i></option>
            <option value="">paneer koftha<i>200</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>PANEER GRAVY SPECIALITIES</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">PANEER BUTTER MASALA <i>180</i></option>
            <option value="">PANEER TIKKA MASALA <i>190</i></option>
            <option value="">PANEER KORMA <i>180</i></option>
            <option value="">PANEER KORMA <i>170</i></option>
            <option value=""> VEG SHAHI PANEER  <i>190</i></option>
            <option value="">PALAK PANEER   <i>160</i></option>
            <option value=""> PANEER BHURJI <i>180</i></option>
            <option value="">PANEER KOLHAPURI <i>190</i></option>
            <option value=""> KADAI PANEER <i>190</i></option>
            <option value=""> METHI MALAI MUTTER<i>170</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>DAAL CORNER</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">DAAL FRY <i>100</i></option>
            <option value="">DOUBLE TADKA DAAL <i>110</i></option>
            <option value=""> DAAL KOLHAPURI<i>120</i></option>
            <option value=""> DAAL PALAK<i>130</i></option>
            <option value=""> GREEN SPOON SPECIAL PANEER DAAL <i>150</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>SIDE'S</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">GREEN SALAD <i>60</i></option>
            <option value="">CUCUMBER SALAD  <i>50</i></option>
            <option value=""> VEGETABLE RAITHA<i>400</i></option>
            <option value=""> PINEAPPLE RAITHA<i>400</i></option>
            <option value=""> MASALA PAPAD  <i>50</i></option>
            <option value=""> ROASTEDPAPAD  <i>30</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>COLD BEVERAGES</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value=""> SOFT DRINKS <i>30</i></option>
            <option value="">FRESH WATER MELON JUICE <i>70</i></option>
            <option value="">FRESH ORANGE JUICE <i>70</i></option>
            <option value="">FRESH PINEAPPLE JUICE <i>70</i></option>
            <option value=""> FRESH GRAPE JUICE <i>70</i></option>
            <option value="">FRESH MOSAMBI JUICE  <i>70</i></option>
            <option value=""> MANGO JUICE (SEASONAL) <i>80</i></option>
            <option value="">CHIILLED CUCUMBR JUICE  <i>90</i></option>
            <option value=""> FRESH CARROT JUICE <i>100</i></option>
            <option value=""> FRESH FRUIT PUNCH<i>100</i></option>
            <option value="">MANGO LASSI  <i>80</i></option>
            <option value=""> SWEET LASSI  <i>60</i></option>
            <option value="">SALTED LASSI<i>60</i></option>
            <option value="">FRESH LIME JUICE <i>40</i></option>
            <option value="">FRESH MINT LIME JUICE <i>45</i></option>
            <option value="">FRESH LIME SODA <i>50</i></option>
            <option value="">MINT LIME SODA <i>60</i></option>
            <option value=""> KHATTA MEETA ORANGE SODA <i>70</i></option>
            <option value="">KHATTA MEETA LEMON SODA<i>70</i></option>
            <option value=""> COLD COFFEE  <i>60</i></option>
            <option value="">CHILLED HORLICKS  <i>60</i></option>
            <option value=""> CHILLED BADAM MILK<i>60</i></option>
            <option value=""> COKE FLOAT<i>90</i></option>
            <option value="">BUTTER MILK  <i>30</i></option>
            <option value=""> MINERAL WATER  <i>30</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>ICECREAM'S</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">VANILLA <i>70</i></option>
            <option value="">CHOCOLATE <i>80</i></option>
            <option value="">STRWBERRY <i>80</i></option>
            <option value="">KULCHA <i>80</i></option>
            <option value="">IRISH CHOCOLATE   <i>80</i></option>
            <option value="">MANGO  <i>80</i></option>
            <option value=""> BUTTER SCOTCH <i>80</i></option>
            <option value="">SPECIAL KULFI  <i>120</i></option>
            <option value="">GREEN SPOON SUNDAE <i>130</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>MILK SHAKES</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">CHIKKU MILK SHAKE <i>95</i></option>
            <option value="">APPLE MILK SHAKE <i>95</i></option>
            <option value="">POMEGRANATE MILK SHAKE <i>95</i></option>
            <option value="">MUSK MELON MILK SHAKE <i>95</i></option>
            <option value="">BANANA MILK SHAKE   <i>80</i></option>
            <option value="">CHILLED THANDAI  <i>130</i></option>
            <option value=""> WATER MELON MILK SHAKE <i>95</i></option>
            <option value="">VANILLA MILK SHAKE  <i>110</i></option>
            <option value="">CHOCOLATE MILK SHAKE <i>130</i></option>
            <option value=""> STRWBERRY MILK SHAKE<i>130</i></option>
        </select>
    </div>
    <div class="select-container">
        <h1>HOT BEVERAGES</h1><img src={i} alt="" />
         <div className="imga" value='1'><img src={dose} alt="" /></div> 
        <select class="select-box">
            <option value=""> </option>
            <option value="">CHAI <i>20</i></option>
            <option value="">COFFEE <i>20</i></option>
            <option value=""> LEMON TEA<i>30</i></option>
            <option value=""> GREEN TEA<i>30</i></option>
            <option value=""> HOT HORLICKS <i>35</i></option>
            <option value=""> HOT BADAM MALT <i>30</i></option>
            <option value="">HOT KASHAYA <i>20</i></option>
        </select>
    </div>
    </div>
      <Footer/>
    </>
  )
}
