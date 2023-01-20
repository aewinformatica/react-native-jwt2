
Pod::Spec.new do |s|
  s.name         = "RNJwt2"
  s.version      = "1.0.0"
  s.summary      = "RNJwt2"
  s.description  = <<-DESC
                  RNJwt2
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNJwt2.git", :tag => "master" }
  s.source_files  = "RNJwt2/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  