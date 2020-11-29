//
//  ViewController.swift
//  Palette-App
//
//  Created by 林品宏 on 2020/11/28.
//

import UIKit


class ViewController: UIViewController {
    
    
    @IBOutlet weak var imageView: UIImageView!
    
    @IBOutlet weak var redSlider: UISlider!
    @IBOutlet weak var greenSlider: UISlider!
    @IBOutlet weak var blueSlider: UISlider!
    @IBOutlet weak var alphaSlider: UISlider!
    @IBOutlet weak var radiusSlider: UISlider!
    @IBOutlet weak var gradientSlider: UISlider!
    @IBOutlet weak var shadowSlider: UISlider!
    
    @IBOutlet weak var redSwitch: UISwitch!
    @IBOutlet weak var greenSwitch: UISwitch!
    @IBOutlet weak var blueSwitch: UISwitch!
    
    @IBOutlet weak var redLabel: UILabel!
    @IBOutlet weak var greenLabel: UILabel!
    @IBOutlet weak var blueLabel: UILabel!
    @IBOutlet weak var alphaLabel: UILabel!
    
    @IBOutlet weak var randomBtn: UIButton!
    @IBOutlet weak var gradientView: UIView!
    @IBOutlet weak var shadowView: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    
    //決定 slider 可不可以滑
    @IBAction func switchAction(_ sender: UISwitch) {
        
        if redSwitch.isOn{
            redSlider.isEnabled = true
        } else {
            redSlider.isEnabled = false
        }
        if greenSwitch.isOn {
            greenSlider.isEnabled = true
        } else {
            greenSlider.isEnabled = false
        }
        if blueSwitch.isOn {
            blueSlider.isEnabled = true
        } else {
            blueSlider.isEnabled = false
        }
        
        //做三個開關都開啟，才可以啟動隨機button
        if redSwitch.isOn, greenSwitch.isOn, blueSwitch.isOn{
            randomBtn.isEnabled = true
        } else {
            randomBtn.isEnabled = false
        }
    }
    
    //讓調整 slider 時可以換顏色
    @IBAction func changeColor(_ sender: UISlider) {
        
        imageView.backgroundColor = UIColor(red: CGFloat(redSlider.value), green: CGFloat(greenSlider.value), blue: CGFloat(blueSlider.value), alpha:CGFloat(alphaSlider.value))
        
        //讓 label 可以跟著 slider 變換到相對應的數值
        redLabel.text = String(format: "%.2f", redSlider.value)
        greenLabel.text = String(format: "%.2f", greenSlider.value)
        blueLabel.text = String(format: "%.2f", blueSlider.value)
        alphaLabel.text = String(format: "%.1f", alphaSlider.value)
    }
    
    
    @IBAction func randomBtnPress(_ sender: Any) {
        let red = Float.random(in: 0...1)
        let green = Float.random(in: 0...1)
        let blue = Float.random(in: 0...1)
        let alpha = Double.random(in: 0...1)
        
        
        imageView.backgroundColor = UIColor(red: CGFloat(red), green: CGFloat(green), blue: CGFloat(blue), alpha: CGFloat(alpha))
        
        redLabel.text = String(format: "%.2f", red)
        greenLabel.text = String(format: "%.2f", green)
        blueLabel.text = String(format: "%.2f", blue)
        alphaLabel.text = String(format: "%.1f", alpha)
        
        redSlider.value = Float(red)
        greenSlider.value = Float(green)
        blueSlider.value = Float(blue)
        alphaSlider.value = Float(alpha)
    }
    
    
    //圓角
    @IBAction func changeRadius(_ sender: UISlider) {
        imageView.clipsToBounds = true
        imageView.layer.cornerRadius = CGFloat(radiusSlider.value)
        shadowView.layer.cornerRadius = CGFloat(radiusSlider.value)
        gradientView.layer.cornerRadius = CGFloat(radiusSlider.value)
    }
    
    //圓角
//    @IBAction func changeRadiusSlider(_ sender: UISlider) {
//        //imageView.clipsToBounds = true
//        imageView.layer.cornerRadius = CGFloat(radiusSlider.value)
//        //shadowView.layer.cornerRadius = CGFloat(radiusSlider.value)
//    }
//
    //陰影
    @IBAction func changeShadow(_ sender: Any) {
        shadowView.layer.masksToBounds = false
        shadowView.layer.shadowColor = UIColor.darkGray.cgColor
        shadowView.layer.shadowOffset = CGSize(width: 1, height: 1)
        shadowView.layer.shadowOpacity = 0.5
        shadowView.layer.shadowRadius = CGFloat(shadowSlider.value)
    }
    //    //漸層
//    @IBAction func changeGradientSlider(_ sender: UISlider) {
//        let gradientLayer = CAGradientLayer()
//        let locationTop = round(15 * gradientSlider.value) / 15
//        gradientLayer.colors = [UIColor.orange.cgColor, UIColor.yellow.cgColor]
//        gradientLayer.frame = gradientView.bounds
//        gradientLayer.locations = [0.0, NSNumber(value: locationTop)]
//        gradientView.layer.addSublayer(gradientLayer)
//    }
    //漸層
    @IBAction func changeGradient(_ sender: UISlider) {
        let gradientLayer = CAGradientLayer()
        let locationTop = round(15 * gradientSlider.value) / 15
        //gradientLayer.locations = [CGPoint(x: 0, y: 1), CGPoint(x: 0, y: 0)]
        gradientLayer.colors = [CGColor(srgbRed: 0, green: 0, blue: 0, alpha: 0),CGColor(srgbRed: 1, green: 1, blue: 1, alpha: 1)]
        gradientLayer.frame = gradientView.bounds
        gradientLayer.locations = [0.0, NSNumber(value: locationTop)]
        gradientView.layer.addSublayer((gradientLayer))
        
    }
    //陰影
    
//    @IBAction func changeShadowSlider(_ sender: Any) {
//        shadowView.layer.masksToBounds = false
//        shadowView.layer.shadowColor = UIColor.darkGray.cgColor
//        shadowView.layer.shadowOffset = CGSize(width: 1, height: 1)
//        shadowView.layer.shadowOpacity = 0.8
//        shadowView.layer.shadowRadius = CGFloat(shadowSlider.value)
//    }
    
}






