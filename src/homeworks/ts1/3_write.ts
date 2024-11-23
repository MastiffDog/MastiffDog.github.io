/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 **/

/**
 * Нужно создать типы согласно описаний ниже:
**/

/** Категория (Category) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 **/

type Category = {
    id: string;
    name: string;
    photo?: string; 
}

/**  
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
**/

// Пояснения к ДЗ: для удобства я указываю сначала все Required, а потом уже необязательные параметры. Мне так удобнее.
type Product = {
    id: string;
    name: string;
    photo: string;
    createdAt: string;
    price: number;
    category: Category;
    desc?: string;
    oldPrice?: number; 
}

/** 
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
**/

type Operation = Cost | Profit;

/**
*  Трата (Cost) содержит
* - id (строка)
* - name (строка)
* - desc (строка, необязательно)
* - createdAt (строка)
* - amount (число)
* - category (Категория)
* - type ('Cost')
**/

type Cost = {
    id: string;
    name: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Cost';
    desc?: string; 
}

/** 
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 **/

type Profit = {
    id: string;
    name: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Profit';
    desc?: string;
}


// вспомогательная функция генерации случайной строки

const generateRandomString = (length: number) => {
    let result : string = '';
    const characters : string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength : number = characters.length;
    for (let i = 0; i<charactersLength;  i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
**/

export const createRandomProduct = (createdAt: string) => {
    const randomProductCategory: Category = {
        id: generateRandomString(createdAt.length),
        name: generateRandomString(createdAt.length),
        photo: generateRandomString(createdAt.length), 
    }
    
    const randomProduct : Product = {
        id: generateRandomString(createdAt.length),
        name: generateRandomString(createdAt.length),
        photo: generateRandomString(createdAt.length),
        createdAt: createdAt,
        price: Math.random()*1000,
        category: randomProductCategory,
        desc: generateRandomString(createdAt.length),
        oldPrice: Math.random()*1000,
    }

    return randomProduct;    
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

export const createRandomOperation = (createdAt: string) => {
    const min : number = 1;
    const max : number = 10;
    const randomNum : number = Math.floor(Math.random() * (max - min + 1)) + min;

    const randomOperationCategory: Category = {
        id: generateRandomString(createdAt.length),
        name: generateRandomString(createdAt.length),
        photo: generateRandomString(createdAt.length), 
    }
  
    const randomOperation: Operation = {
        id: generateRandomString(createdAt.length),
        name: generateRandomString(createdAt.length),
        createdAt,
        amount: Math.random()*1000,
        category: randomOperationCategory,
        type: randomNum > 5 ? 'Cost' : 'Profit',
        desc: generateRandomString(createdAt.length),
    }

    return randomOperation;
};


describe('all', () => {
    it('operation', () => {
      const createdAt = '2023-06-06T12:06:56.957Z';
      const operation = createRandomOperation(createdAt);
      expect(operation).toHaveProperty('createdAt', createdAt);
      expect(operation).toHaveProperty('id');
      expect(operation).toHaveProperty('name');
      expect(operation).toHaveProperty('desc');
      expect(operation).toHaveProperty('createdAt');
      expect(operation).toHaveProperty('amount');
      expect(operation).toHaveProperty('category');
      expect(operation).toHaveProperty('type');
    });
  
    it('product', () => {
      const createdAt = '2023-06-06T12:06:56.957Z';
      const product = createRandomProduct(createdAt);
      expect(product).toHaveProperty('createdAt', createdAt);
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('photo');
      expect(product).toHaveProperty('desc');
      expect(product).toHaveProperty('createdAt');
      expect(product).toHaveProperty('oldPrice');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('category');
    });
  });