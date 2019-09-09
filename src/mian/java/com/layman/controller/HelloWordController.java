package com.layman.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @ClassName HelloWordController
 * @Description TODO
 * @Author 叶泽文
 * @Data 2019/9/9 10:27
 * @Version 3.0
 **/
@Controller
@RequestMapping("/hello")
public class HelloWordController {

    @GetMapping("")
    public String hello() {
        return "hello";
    }
}
