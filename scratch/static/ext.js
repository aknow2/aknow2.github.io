class HelloWorld {

  constructor() {}

  getInfo() { 
    return {
      id: 'helloworld',
      name: 'hello world',
      blocks: [ 
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.COMMAND,
          text: 'hello'
        }
      ]
    }
  }
  hello() {
    console.log('hello scratch3 !!');
  }
}

Scratch.extensions.register(new HelloWorld());