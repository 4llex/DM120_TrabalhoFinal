export default class Content {
    
    private temperatura: string = "0";
    private luminosidade: string ="0";
    private umidade: string = "0";
   
    constructor(temperatura: string, luminosidade: string, umidade: string) {
        this.temperatura = temperatura
        this.luminosidade =luminosidade
        this.umidade = umidade
    }

    /**
    * Getter $temperature
    * @return {string }
    */
    public get $temperatura(): string {
    return this.temperatura;
    }
    /**
    * Setter $temperature
    * @param {string } value
    */
    public set $temperatura(value: string ) {
    this.temperatura = value;
    }
   

    /**
     * Getter $luminosidade
     * @return {string }
     */
	public get $luminosidade(): string  {
		return this.luminosidade;
	}

    /**
     * Setter $luminosidade
     * @param {string } value
     */
	public set $luminosidade(value: string ) {
		this.luminosidade = value;
	}


    /**
     * Getter $umidade
     * @return {string }
     */
	public get $umidade(): string  {
		return this.umidade;
	}

    /**
     * Setter $umidade
     * @param {string } value
     */
	public set $umidade(value: string ) {
		this.umidade = value;
	}


   }