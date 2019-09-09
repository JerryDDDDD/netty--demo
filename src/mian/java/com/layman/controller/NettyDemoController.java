package com.layman.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @ClassName NettyDemoController
 * @Description TODO
 * @Author 叶泽文
 * @Data 2019/9/9 10:33
 * @Version 3.0
 **/
@Controller
@RequestMapping("/netty")
public class NettyDemoController {

    /**    
     * @Author 叶泽文
     * @Description 跳转到netty使用的demo页面
     * @Date 10:36 2019/9/9
     * @Param []
     * @return java.lang.String
     **/
    @GetMapping("/page.html")
    public String nettyDemoPage() {
        return "/netty/nettyDemo";
    }
}
