<template>
     <div class="j-calculator">
          <div class="j-calculator-screen">
               <div class="j-calculator-screen-solution">
                    <template v-if="solutionHandler.length > 0">
                         <span v-for="item in solutionHandler" :key="item">{{item}}</span>
                    </template>
                    <template v-else>
                         <span>0</span>
                    </template>
                    
               </div>
               <div class="j-calculator-screen-answer">
                    {{answer}}
               </div>
          </div>
          <div class="j-separator"></div>
          <div class="j-calculator-buttons">
               <div class="j-flex">
                    <div style="flex: 2;">
                         <button class="reset-button" @click="allClearButton()">AC</button>
                    </div>
                    <div style="flex: 1;">
                         <button @click="clearButton()">CLR</button>
                    </div>
                    <!-- <div>
                         <button @click="clickNumber('%')">%</button>
                    </div> -->
                    <div style="flex: 1;">
                         <button @click="clickOperator('/')">÷</button>
                    </div>
               </div>
               <div class="j-flex">
                    <div>
                         <button @click="clickNumber(7)">7</button>
                    </div>
                    <div>
                         <button @click="clickNumber(8)">8</button>
                    </div>
                    <div>
                         <button @click="clickNumber(9)">9</button>
                    </div>
                    <div>
                         <button @click="clickOperator('*')">x</button>
                    </div>
               </div>
               <div class="j-flex">
                    <div>
                         <button @click="clickNumber(4)">4</button>
                    </div>
                    <div>
                         <button @click="clickNumber(5)">5</button>
                    </div>
                    <div>
                         <button @click="clickNumber(6)">6</button>
                    </div>
                    <div>
                         <button @click="clickOperator('-')">-</button>
                    </div>
               </div>
               <div class="j-flex">
                    <div>
                         <button @click="clickNumber(1)">1</button>
                    </div>
                    <div>
                         <button @click="clickNumber(2)">2</button>
                    </div>
                    <div>
                         <button @click="clickNumber(3)">3</button>
                    </div>
                    <div>
                         <button @click="clickOperator('+')">+</button>
                    </div>
               </div>
               <div class="j-flex">
                    <div style="flex: 1;">
                         <button @click="clickNumber(0)">0</button>
                    </div>
                    <div style="flex: 1;">
                         <button @click="clickNumber('.')">.</button>
                    </div>
                    <div style="flex: 2;">
                         <button class="equals-button" @click="equalButton()">=</button>
                    </div>
               </div>
          </div>
     </div>
</template>
<script src="./jcalculator.js"></script>