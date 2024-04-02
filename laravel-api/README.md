# Pemrograman Berbasis Framework - Pertemuan 7

## Introduction

I'm Maulidio Farhan Rizkullah with student ID 2141720041. I'm currently study in TI-3C class of State Polytechnic of Malang. With a passion for technology and a knack for problem-solving, I'm constantly seeking to expand my knowledge and skills in the field of programming.

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Author](#author)
- [Documentation](#documentation)
- [Contact Me](#contact-me)

## Author

- [@DioGitH](https://www.github.com/DioGitH)

## Documentation

### Tutorial 1

#### Langkah 1
![ss1](docs/img/p1ss1.png)

#### Langkah 2
![ss](docs/img/p1ss2.png)

#### Langkah 3
![ss](docs/img/p1ss3.png)

#### Langkah 4
![ss](docs/img/p1ss4.png)

#### Langkah 5
![ss](docs/img/p1ss5.png)

#### Langkah 6
![ss](docs/img/p1ss6.png)

#### Langkah 7
![ss](docs/img/p1ss7.png)

### Tutorial 2

#### Langkah 1
![ss](docs/img/p2ss1.png)

#### Langkah 2
![ss](docs/img/p2ss2.png)

### Tutorial 3

#### Langkah 1
![ss](docs/img/p3ss1.png)

#### Langkah 2
![ss](docs/img/p3ss2.png)

#### Langkah 3
![ss](docs/img/p3ss3.png)

#### Langkah 4
![ss](docs/img/p3ss4.png)

### Tutorial 4

#### Langkah 1
![ss](docs/img/p4ss11.png)

![ss](docs/img/p4ss12.png)

![ss](docs/img/p4ss13.png)

![ss](docs/img/p4ss14.png)

![ss](docs/img/p4ss15.png)

![ss](docs/img/p4ss16.png)

#### Langkah 2

***Pesan error***
![ss](docs/img/p4ss2.png)

***Setelah Berhasil***
![ss](docs/img/p4ss3.png)

![ss](docs/img/p4ss4.png)

### Tutorial 5

#### Langkah 1
![ss](docs/img/p5ss1.png)

***Hasil***
![ss](docs/img/p5ss2.png)

### Tutorial 6

#### Langkah 1
Menambahkan kode dibawah ini pada PostController
```php
    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $post
     * @return void
     */
    public function update(Request $request, Post $post)
    {
        //define validation rules
        $validator = Validator::make($request->all(), [
            'title'     => 'required',
            'content'   => 'required',
        ]);

        //check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //check if image is not empty
        if ($request->hasFile('image')) {

            //upload image
            $image = $request->file('image');
            $image->storeAs('public/posts', $image->hashName());

            //delete old image
            Storage::delete('public/posts/'.$post->image);

            //update post with new image
            $post->update([
                'image'     => $image->hashName(),
                'title'     => $request->title,
                'content'   => $request->content,
            ]);

        } else {

            //update post without image
            $post->update([
                'title'     => $request->title,
                'content'   => $request->content,
            ]);
        }

        //return response
        return new PostResource(true, 'Data Post Berhasil Diubah!', $post);
    }
```

***Hasil***
![ss](docs/img/p6ss1.png)
![ss](docs/img/p6ss2.png)

### Tutorial 7

#### Langkah 1
![ss](docs/img/p7ss1.png)

***Hasil***
![ss](docs/img/p7ss2.png)

Database kosong kembali karena data telah berhasil dihapus
![ss](docs/img/p7ss3.png)




## Contact Me

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=maulidiobisnis16@gmail.com)
[![Whastapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send/?phone=6285289589391&text&type=phone_number&app_absent=0)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Maulidio16)





