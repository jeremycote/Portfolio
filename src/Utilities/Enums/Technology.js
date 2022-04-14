class Technology {
    static Swift = new Technology("Swift", "");
    static CSharp = new Technology("CSharp", "");
    static Unity = new Technology("Unity", "");

    constructor(name, img) {
        this.name = name;
        this.img = img;
    }
}