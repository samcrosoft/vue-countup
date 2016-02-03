# VueCountUp

CountUp plugin implemented for use with Vue.js.

This is a component built for the very interesting CountUp plugin


## Usage

### Installation

Firstly, insert the vue.js script and then insert a reference to the vue-countUp library as done below

```html
    <script scr='/path/to/vue/vue.js'></script>
    <script scr='/path/to/vuecountup/dist/vue-count-up.js'></script>
```

Install Using **Windows Global**

```html
    <script type='text/javascript'>
        Vue.use(window.VueCountUp);
    </script>
```

or, Install Using **Module Loader**

```html
    <script type='text/javascript'>
        Vue.use(require('vue-countup'));
    </script>
```

### Use in templates

You can insert a count up element like below

```html
<vuecountup class="myCounter" :end="2500" :duration="2.5" :options="{useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''}"></vuecountup>
            
```

You can specify all the attributes listed below, only the end attribute is ***required***

See [CountUp documentation](https://inorganik.github.io/countUp.js/) for all available attributes.

### Available Attributes


1. **start** - This is the start value for the count up 
    - **type**: Number
    - **required** : false
    - **default** : 0
2. **end** - This is the value that count-up counts to 
    - **type**: Number
    - **required** : true
3. **decimal** - This is the number of decimal places the count-up component should use in display 
    - **type**: Number
    - **required** : false
    - **default** : 0
4. **duration** - This is the duration for the countup animation to count from *start* to *end* 
    - **type**: Number
    - **required** : false
    - **default** : 2.5
4. **options** - This is the option for the countup plugin 
    - **type**: Object
    - **required** : false    
    

See [CountUp documentation](https://inorganik.github.io/countUp.js/) for all available attributes.

## License

This plugin is released under the [MIT Licence](https://opensource.org/licenses/MIT)