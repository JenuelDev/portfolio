export default {
    name: "jcalculator",
    props: {
        msg: String,
    },
    data() {
        return {
            solution: 0,
            answer: '',
            solutionHandler: [],
            operatos: ['+', '-', '*', '/']
        };
    },
    methods: {

        clickNumber(number) {
            if (this.answer != '') {
                this.solutionHandler = [];
                this.solutionHandler.push(String(number));
                this.answer = '';
                return true;
            }
            if (this.solutionHandler.length == 0) {


                if (number == '.') {
                    this.solutionHandler[this.solutionHandler.length] = 0 + number;
                    return false
                }

                this.solutionHandler[this.solutionHandler.length] = number;

            } else {

                if (this.solutionHandler.length > 0) {
                    if (number == '.' && String(this.solutionHandler[this.solutionHandler.length-1]).includes('.')) {
                        return false
                    }
                    // console.log(this.solutionHandler.length);

                    if (this.operatos.includes(this.solutionHandler[this.solutionHandler.length - 1])) {
                        
                        this.solutionHandler[this.solutionHandler.length] = number;

                    } else {
                        if (String(this.solutionHandler[this.solutionHandler.length - 1]).charAt(this.solutionHandler[this.solutionHandler.length - 1].length - 1) == '%') {
                            alert('Ops The number is already a percent.');
                        } else {
                            this.solutionHandler[this.solutionHandler.length - 1] = String(this.solutionHandler[this.solutionHandler.length - 1]) + String(number);
                        }
                    }
                }
            }
        },



        clickOperator(operator) {
            
            if (this.answer != "") {
                this.solutionHandler = [];
                this.solutionHandler.push(String(this.answer));
                this.solutionHandler[this.solutionHandler.length] = String(operator);
                this.answer = '';
                return true;
            }
            if (this.operatos.includes(this.solutionHandler[this.solutionHandler.length - 1])) {
                // console.log('Operator is already set. Please add a number.');
                this.solutionHandler[this.solutionHandler.length - 1] = String(operator);
            } else {
                this.solutionHandler[this.solutionHandler.length] = operator;
            }
        },


        equalButton() {
            try {
                let str = '';
                this.solutionHandler.forEach(a => {
                    str += String(a);
                });
                this.answer = eval(str);
            } catch (e) {
                this.answer = 'Syntax Error!'
            }
            
        },
        clearButton() {
            this.solutionHandler[this.solutionHandler.length - 1] = String(this.solutionHandler[this.solutionHandler.length - 1]).slice(0, -1);
            if (this.solutionHandler[this.solutionHandler.length - 1] == '') {
                this.solutionHandler.pop();
            }
        },

        allClearButton() {
            this.solutionHandler = [];
            this.answer = '';
        }
    }
};
