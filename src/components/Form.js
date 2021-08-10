import React, {Component} from 'react'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const sections = ["intro-page", "sect-one", "sect-two-one", "sect-two-two", "sect-three", "sect-four", "sect-five", "final-sect"]

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentSection: 1,

            //section one
            finalName: '',
            numNames: '1',
            numNameText: '',

            //section two
            fullName: '',
            occupation: '',
            petBreed: '',
            childhoodMemory: '',
            badStabObject: '',
            goodAt: '',
            numCarrots: '',
            intangibleFear: '',
            tangibleFear: '',
            lastActivity: '',
            bodyCondition: '',
            stateOfMatter: '',
            soundsLikeWord: '',
            zodiac: '',
            personalityWord: '',

            //section three
            filmChar: '',
            kubrickFilm: '',
            joyDivAlb: '',
            scienceTerm: '',
            militaryHardW: '',
            madsMikkelsen: '',

            //section four
            manCondition: false,
            manCondText: '-',
            condCond: '',
            condCondText: '-',
            kojimaCond: false,
            kojimaCondText: '-',

            //section five
            nameCategory: '',
            nameCatText: '',
            finalNameDesc: ''

        }  
        
    }

    
    
    //page selection
    nextPage = () => {
        if (this.state.currentSection < 8) {
            this.setState((prevState) => ({
                currentSection: prevState.currentSection+1
            }))
    
            for (var i=0;i<sections.length-1;i++){
                document.getElementById(sections[i]).style.display = "none";
            }
            
            document.getElementById(sections[this.state.currentSection]).style.display= "block"
            if(sections[this.state.currentSection] === "final-sect") {
                document.getElementById("button-area").style.display = "none"
            }
        } 
        
        
    }
    

    // App functionality
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    rollDice = (num) => {
       return Math.floor(Math.random()*num+1)
    }
 
    //section one functionality
    rollNameDice = () => {
        let outcome = this.rollDice(6)
        
        document. getElementById("dsix"). disabled = true;
        if (outcome === 6) {
           this.setState({
               numNames: outcome,
               numNameText: 'You have one name plus six alternate names'
            })           
        } else {    
            this.setState({
                numNames: outcome,
                numNameText: 'You have one name'
            })
        }
    }

    //section 4 functionality
    // -man condition
    rollManDice = () => {
        let outcome = this.rollDice(4)
        document. getElementById("man-butt"). disabled = true;
        if (outcome < 4) {
            this.setState({
                 manCondText: 'You do not have this condition'                 
             })           
         } else {    
             this.setState({
                 manCondText: 'You have this condition. Your last name will include the suffix -man. If your name already has -man at the end of it, I guess you just have -manman at the end of your name',
                 manCondition: true
             })
         }
    }

    //condition condition
    rollCondDice = () => {
        let outcome = this.rollDice(8)
        document. getElementById("cond-butt"). disabled = true;
        if (outcome < 6) {
            this.setState({
                 condCondText: 'You do not have this condition'
             })           
         } else if (outcome === 6) {    
             this.setState({
                 condCondText: 'You are big. Your name must have "Big" at the beginning of it',
                 condCond: 'Big'
             })
         } else if (outcome === 7) {    
            this.setState({
                condCondText: 'You are older that you once were. Your name must have "Old" at the beginning of it',
                condCond: 'Old'
            })
        } else {
            this.setState({
                condCondText: 'You are how you currently are',
                condCond: 'current'
            })
        }
    }

    // Kojima condition
    rollKojimaDice = () => {
        let outcome = this.rollDice(100)
        document. getElementById("kojima-butt"). disabled = true;
        if (outcome < 69 || outcome > 69) {
            this.setState({
                 kojimaCondText: 'You do not have this condition'                 
             })           
         } else {    
             this.setState({
                kojimaCondText: 'You are Hideo Kojima',
                kojimaCondition: true
             })
         }
    }

    //section five
    rollNameType = () => {
        if (this.state.numNames !== 6){
            let outcome = this.rollDice(20)
            document. getElementById("name-type-butt"). disabled = true;
            if (outcome === 1) {
                this.setState({
                    nameCategory: 'normal',
                    nameCatText: 'You have a NORMAL name'                
                })           
            } else if (outcome >= 2 && outcome <=6) {    
                this.setState({
                    nameCategory: 'occupational',
                    nameCatText: 'You have an OCCUPATIONAL name'
                })
            } else if (outcome >= 7 && outcome <=10) {    
                this.setState({
                nameCategory: 'horny',
                nameCatText: 'You have a HORNY name'
                })
            } else if (outcome >= 11 && outcome <=13) {    
                this.setState({
                nameCategory: 'the',
                nameCatText: 'You have a THE name'
                })
            } else if (outcome >= 14 && outcome <=17) {    
                this.setState({
                nameCategory: 'cool',
                nameCatText: 'You have a COOL name'
                })
            } else if (outcome >= 18 && outcome <=19) {    
                this.setState({
                nameCategory: 'violent',
                nameCatText: 'You have a VIOLENT name'
                })
            } else {
                this.setState({
                    nameCategory: 'noSubtext',
                    nameCatText: 'You have a name that LACKS SUBTEXTS'
                })
            }
        } else {
            this.setState({
                nameCategory: 'all',
                nameCatText: 'You have ALL the names'
            })
        }
    }
    
    // final name
    findName = () => {
        let outcome = []
        let descText = ''
        let roll = 0

        if (this.state.kojimaCond === true) {
            outcome.push('Hideo Kojima')
            descText = 'Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you. You are the man who created himself and there is nothing you can do about it. You`re in Kojima`s world -your world- and that`s just the breaks, pal. Stop this worksheet now. You are Hideo Kojima. Go do things that Hideo Kojima does'

            this.setState({
                finalName: outcome,
                finalNameDesc: descText
                
            })
            return
        }


        if ((this.state.condCond === 'Old' || this.state.condCond === 'Big') && this.state.nameCategory !== 'the') {
            outcome.push(this.state.condCond  + ' ')
        }
        if (this.state.condCond === 'current') {
            outcome.push(' ' + this.state.bodyCondition)
        }
        

        // normal name
        if (this.state.numNames === 6 || this.state.nameCategory === 'normal') {
            descText = 'Kojima`s early work includes lots of characters that have names that are widely considered to be "normal". Was this just because, in the early years, he didn`t have the power to say, "I`m Hideo Kojima, I can name someone Die-Hardman if I want to" without people questioning him? Probably'

            outcome.push(' ' + this.state.fullName)
        }

        // occupational name
        if (this.state.numNames === 6 || this.state.nameCategory === 'occupational') {
            descText = 'Kojima`s characters tend to be driven by the work that they do. That often carries over to their names. You, too, can be nothing more than your job!'

            if (this.state.numNames === 6) outcome.push('  A.K.A.')
            roll = this.rollDice(4)
            if (roll === 1) {
                outcome.push(' ' + this.state.personalityWord)
            } else if (roll === 2) {
                outcome.push(' ' + this.state.goodAt)
            }else if (roll === 3) {
                outcome.push(' ' + this.state.soundsLikeWord)
            } else {
                outcome.push(' ' + this.state.filmChar)
            }
            
            outcome.push(' ' + this.state.occupation)
        }

        if (this.state.numNames === 6 || this.state.nameCategory === 'horny') {
            descText = 'Kojima`s characters tend to be driven by the work that they do. That often carries over to their names. You, too, can be nothing more than your job!'
            
            if (this.state.numNames === 6) outcome.push('  A.K.A.')
            roll = this.rollDice(4)
            if (roll === 1) {
                outcome.push(' ' + this.state.stateOfMatter)
            } else if (roll === 2) {
                outcome.push(' Naked')
            }else if (roll === 3) {
                outcome.push(' ' + this.state.goodAt)
            } else {
                outcome.push(' ' + this.state.zodiac)
            }

            roll = this.rollDice(5)
            if (roll === 5) outcome.push(' Lickable')
            outcome.push(' ' + this.state.petBreed)
        }

        // the name
        if (this.state.numNames === 6 || this.state.nameCategory === 'the') {
            descText = 'Kojima loves to make people have names that start with the word "The" and they usually symbolize fears or unstoppable forces. You are now that unstoppable force'

            if (this.state.numNames === 6) outcome.push('  A.K.A.')
            outcome.push(' The')
            if (this.state.numNames !== 6) outcome.push(this.state.condCond  + ' ')
           

            roll = this.rollDice(4)
            if (roll === 1) {
                outcome.push(' ' + this.state.intangibleFear)
            } else if (roll === 2) {
                outcome.push(' ' + this.state.tangibleFear)
            }else if (roll === 3) {
                outcome.push(' ' + this.state.childhoodMemory)
            } else {
                outcome.push(' ' + this.state.militaryHardW)
            }

            
        }

        // cool name
        if (this.state.numNames === 6 || this.state.nameCategory === 'cool') {
            descText = 'Kojima loves to be cool. Sometimes, his idea of cool is a bit strange, but it is always cool to Hideo Kojima, and that`s what matters'
            if (this.state.numNames === 6) outcome.push('  A.K.A.')
            outcome.push(' ' + this.state.madsMikkelsen)

            
                roll = this.rollDice(6)
                if (roll === 1) {
                    outcome.push(' ' + this.state.kubrickFilm)
                } else if (roll === 2) {
                    outcome.push(' ' + this.state.joyDivAlb)
                }else if (roll === 3) {
                    outcome.push(' ' + this.state.scienceTerm)
                } else if (roll === 4) {
                    outcome.push(' ' + this.state.goodAt)
                } else if (roll === 5) {
                    outcome.push(' ' + this.state.intangibleFear)
                } else {
                    outcome.push(' ' + this.state.soundsLikeWord)
                }
            
            
        }

        // violent name
        if (this.state.numNames === 6 || this.state.nameCategory === 'violent') {
            descText = 'Sometimes, a Kojima name can be very threatening and violent, like Sniper Wolf or The Fury. Now you can also be threatening and violent!'

            if (this.state.numNames === 6) outcome.push('  A.K.A.')
            roll = this.rollDice(4)
            if (roll === 1) {
                outcome.push(' ' + this.state.scienceTerm)
            } else if (roll === 2) {
                outcome.push(' ' + this.state.stateOfMatter)
            }else if (roll === 3) {
                outcome.push(' ' + this.state.militaryHardW)
            } else {
                outcome.push(' ' + this.state.tangibleFear)
            }

            if (this.state.nameCategory === 'violent')outcome.push(' ' + this.state.badStabObject)
        }

        //lacks subtext
        if (this.state.numNames === 6 || this.state.nameCategory === 'noSubtext') {
            descText = 'Sometimes, Kojima gives up and just names a character exactly what they are. Congratulations. You are exactly what you do.'

            if (this.state.numNames === 6) outcome.push('  A.K.A.')
            outcome.push(' ' + this.state.lastActivity)
        }

        // man cond addition
        if (this.state.manCondition === true) {
            outcome.push('man')
        }

        this.setState({
            finalName: outcome,
            finalNameDesc: descText
            
        })
    }
    

    render() {
        
        return (
            <div>
                <h1>The Kojima Name Generator</h1>

                <div id="intro-page" className="page-section">
                    <h2>Welcome</h2>
                    <p>Hideo Kojima has written quite a few games, and in nearly every single one of them the characters are given just the most wild names possible. </p>
                    <p>He's been doing this for years. How could you forget such wonderful names as "Dirty Duck", Hot Coldman",  "Naked Snake", or perhaps, the wildest character in every Kojima game: Hideo Kojima</p>
                    <p>It may seem impossible to have the naming talent that blesses Kojima's magical mind, but through the magic of Brian David Gilbert we have the Hideo Kojima Name Generator</p>
                    <p>It's time to find out what your name would be if you were in a Kojima game</p>
                </div>
                
                <div id="sect-one" className="page-section">
                    <div className="intro-area">
                        <h2>Section 1: Determining How Many Names You Have</h2>
                        <p className="description">Kojima often creates characters that have many alternate names, so we must figure out how many names you will have</p>
                    </div>
                    <div className="form-area">
                        <button id="dsix" className="roll-butt" onClick={this.rollNameDice}>Roll The Dice</button>
                        <p>{this.state.numNameText}</p>
                    </div> 
                </div>

                <div id="sect-two-one" className="page-section">
                    <div className="intro-area">
                        <h2>Section 2: Personal Information pt.1</h2>
                        <p className="description">Kojima's characters have names that are directly related to their own character traits. This information will make sure your name fits your personality</p>
                    </div>
                    <div className="form-area">
                        <ul>
                            <li>
                                <label>1. What is your full name?</label>
                                <input type="text"
                                    name="fullName"
                                    value={this.state.fullName}
                                    onChange={this.changeHandler}
                                    placeholder="Brian David Gilbert"
                                ></input>
                            </li>
                            <li>
                                <label>2. What do you do at your occupation?</label>
                                <textarea
                                    placeholder="I produce videos that are vaguely related to video games"
                                ></textarea>
                                <ul><li>
                                    <label>2a. Condense that verb in you answer into a single -er noun. (e.g. if you are a sheep farmer, your answer will be "farmer"</label>
                                    <input type="text"
                                        name="occupation"
                                        value={this.state.occupation}
                                        onChange={this.changeHandler}
                                        placeholder="Producer"
                                    ></input>
                                </li></ul>
                            </li>
                            <li>
                                <label>3. What was your first pet's specific species/breed? If you never had a pet please answer with an animal you wish you owned</label>
                                <input type="text"
                                    name="petBreed"
                                    value={this.state.petBreed}
                                    onChange={this.changeHandler}
                                    placeholder="Rainbow Shark"
                                ></input>
                            </li>
                            <li>
                                <label>4. What's your most embarrassing childhood memory? Be Specific</label>
                                <textarea
                                    placeholder="In seventh grade I was in the production of Beauty and the Best, and at one point our Belle missed her costume change, and so I had to stand out and basically ad lib for what felt like an hour. Earlier that week, I had head my more mature friend say a joke that I did not realize was sexual, and so I said that joke while I was on stage, and I saw a whole crowd of middle school parents all go 'eeeeeeeeee'"
                                    rows="5"
                                ></textarea>
                                <ul><li>
                                    <label>4a. Condense this story into two words</label>
                                    <input type="text"
                                         name="childhoodMemory"
                                         value={this.state.childhoodMemory}
                                         onChange={this.changeHandler}
                                         placeholder="Lewd Improvisation"
                                    ></input>
                                </li></ul>
                            </li>
                            <li>
                                <label>5. What is the object you'd least like to be stabbed by?</label>
                                <input type="text"
                                     name="badStabObject"
                                     value={this.state.badStabObject}
                                     onChange={this.changeHandler}
                                     placeholder="Trident"
                                ></input>
                            </li>
                            <li>
                                <label>6. What is something you're good at? (Verb ending in -ing)</label>
                                <input type="text"
                                     name="goodAt"
                                     value={this.state.goodAt}
                                     onChange={this.changeHandler}
                                     placeholder="Jumping"
                                ></input>
                            </li>
                            <li>
                                <label>7. How many carrots do you believe you could eat in one sitting, if someone like, forced you to eat as many carrots as possible?</label>
                                <input type="text"
                                     name="numCarrots"
                                     value={this.state.numCarrots}
                                     onChange={this.changeHandler}
                                     placeholder="16"
                                ></input>
                            </li>
                            

                        </ul>


                    </div>
                </div>

                <div id="sect-two-two" className="page-section">
                    <div className="intro-area">
                        <h2>Section 2: Personal Information pt. 2</h2>
                        <p className="description">Kojima's characters have names that are directly related to their own character traits. This information will make sure your name fits your personality</p>
                    </div>
                    <div className="form-area">
                    <li>
                                <label>8. What is your greatest intangible fear? (e.g. death, loneliness, fear itself</label>
                                <input type="text"
                                    name="intangibleFear"
                                    value={this.state.intangibleFear}
                                    onChange={this.changeHandler}
                                    placeholder="Memory Loss"
                                ></input>
                            </li>
                            <li>
                                <label>9. What is your greatest tangible fear? (e.g. horses)</label>
                                <input type="text"
                                    name="tangibleFear"
                                    value={this.state.tangibleFear}
                                    onChange={this.changeHandler}
                                    placeholder="Horses"
                                ></input>
                            </li>
                            <li>
                                <label>10. What is the last thing you did before starting this worksheet?</label>
                                <input type="text"
                                    name="lastActivity"
                                    value={this.state.lastActivity}
                                    onChange={this.changeHandler}
                                    placeholder="Started a Recording"
                                ></input>
                            </li>
                            <li>
                                <label>11. What condition is your body currently in? (single word answer)</label>
                                <input type="text"
                                    name="bodyCondition"
                                    value={this.state.bodyCondition}
                                    onChange={this.changeHandler}
                                    placeholder="Bloated"
                                ></input>
                            </li>
                            <li>
                                <label>12. Favorite state of matter?</label>
                                <input type="text"
                                    name="stateOfMatter"
                                    value={this.state.stateOfMatter}
                                    onChange={this.changeHandler}
                                    placeholder="Liquid"
                                ></input>
                            </li>
                            <li>
                                <label>13. A word your name kind of sounds like? (e.g. Brian = brain)</label>
                                <input type="text"
                                    name="soundsLikeWord"
                                    value={this.state.soundsLikeWord}
                                    onChange={this.changeHandler}
                                    placeholder="Brain"
                                ></input>
                            </li>
                            <li>
                                <label>14. What is your zodiac sign?</label>
                                <input type="text"
                                    name="zodiac"
                                    value={this.state.zodiac}
                                    onChange={this.changeHandler}
                                    placeholder="Aquarius"
                                ></input>
                            </li>
                            <li>
                                <label>15. If you had to define your personality in one word, what would it be?</label>
                                <input type="text"
                                    name="personalityWord"
                                    value={this.state.personalityWord}
                                    onChange={this.changeHandler}
                                    placeholder="Pedant"
                                ></input>
                            </li>
                    </div>
                </div>

                <div id="sect-three" className="page-section">
                    <div className="intro-area">
                        <h2>Section 3: Kojima Information</h2>
                        <p className="description">Kojima character names reflect his own idiosyncrasies. He can't help himself</p>
                    </div>
                    <div className="form-area">
                        <ul>
                            <li>
                                <label>16. Who is your favorite film character? (NOTE: must be played by Kurt Russell)</label>
                                <input type="text"
                                    name="filmChar"
                                    value={this.state.filmChar}
                                    onChange={this.changeHandler}
                                    placeholder="MacReady"
                                ></input>
                            </li>
                            <li>
                                <label>17. What is the last word of the title of your favorite Kubrick film?</label>
                                <input type="text"
                                    name="kubrickFilm"
                                    value={this.state.kubrickFilm}
                                    onChange={this.changeHandler}
                                    placeholder="Orange"
                                ></input>
                            </li>
                            <li>
                                <label>18. What is the first word in the title of your favorite Joy Division album?</label>
                                <input type="text"
                                    name="joyDivAlb"
                                    value={this.state.joyDivAlb}
                                    onChange={this.changeHandler}
                                    placeholder="Unknown"
                                ></input>
                            </li>
                            <li>
                                <label>19. What is a scientific term you picked up from listening to NPR once?</label>
                                <input type="text"
                                    name="scienceTerm"
                                    value={this.state.scienceTerm}
                                    onChange={this.changeHandler}
                                    placeholder="CRISPR"
                                ></input>
                            </li>
                            <li>
                                <label>20. What is a piece of military hardware you think looks cool even though war is bad?</label>
                                <input type="text"
                                    name="militaryHardW"
                                    value={this.state.militaryHardW}
                                    onChange={this.changeHandler}
                                    placeholder="Railguns"
                                ></input>
                            </li>
                            <li>
                                <label>21. What is something you'd enjoy watching Mads Mikkelsen do?</label>
                                <textarea rows="20"
                                    placeholder="I'd enjoy waking up one day and coming out to see Mads Mikkelsen in my kitchen just sweeping up some cheerios. And then he looks up at me and gives me that 'Aren't I so clumsy?' smile"
                                ></textarea>
                                <ul><li>
                                    <label>21a. Please condense into one word?</label>
                                    <input type="text"
                                        name="madsMikkelsen"
                                        value={this.state.madsMikkelsen}
                                        onChange={this.changeHandler}
                                        placeholder="Cheerio"
                                    ></input>
                                </li></ul>
                            </li>
                        </ul>
                    </div> 
                </div>

                <div id="sect-four" className="page-section">
                    <div className="intro-area">
                        <h2>Section 4: Determining Your Name Conditions</h2>
                        <p className="description">Sometimes, a character will have a plot-based condition that affects their name. You, too, might have a condition that affects your name. Conditions can stack so please make note of how many your name has</p>
                    </div>
                    <div className="form-area">
                        <h3>1. The -Man Condition</h3>
                        <p>{this.state.manCondText}</p>
                        <button id="man-butt" className="roll-butt"  onClick={this.rollManDice}>Click</button>

                        <h3>2. The Condition Condition</h3>
                        <p>{this.state.condCondText}</p>
                        <button id="cond-butt" className="roll-butt"  onClick={this.rollCondDice}>Click</button>

                        <h3>3. The Kojima Condition</h3>
                        <p>{this.state.kojimaCondText}</p>
                        <button id="kojima-butt" className="roll-butt"  onClick={this.rollKojimaDice}>Click</button>
                    </div> 
                </div>

                <div id="sect-five" className="page-section">
                    <div className="intro-area">
                        <h2>Section 5: Determining Your Name Category</h2>
                        <p className="description">Kojima names fall into a finite number of categories. This section will determine the category in which your name belongs</p>
                        <button id="name-type-butt" className="roll-butt" onClick={this.rollNameType}>Click</button>
                        <p>{this.state.nameCatText}</p>
                    </div>
                    <div className="form-area">
                        
                    </div> 
                </div>
                                    
                <div id="final-sect" className="page-section">
                    <div className="intro-area">
                        
                        <p className="description"></p>
                    </div>
                    <div className="form-area">
                        
                        <button id="final-butt" className="roll-butt" onClick={this.findName}>Click Here For Your Kojima Name</button>
                        
                        <h3 id="final-name-desc">{this.state.finalNameDesc}</h3>
                        <p id="final-name-text">{this.state.finalName}</p>
                    </div> 
                </div>

                <div id="button-area">
            	    
                    <FontAwesomeIcon icon={faHeart} className="button-icon" /> <button className="next-button" onClick={this.nextPage}>Next</button>
                    </div>    
                   
                
            </div>
        )
    }
}



export default Form

{/* <div id="sect-three" className="page-section">
                    <div className="intro-area">
                        <h2></h2>
                        <p className="description"></p>
                    </div>
                    <div className="form-area">
                        
                    </div> 
                </div> */}
