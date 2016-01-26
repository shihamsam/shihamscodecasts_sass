module UsersHelper
    
    def job_title_icon
        if @user.profile.job_title == "Developer"
            "<i class='fa fa-code'></i>".html_safe
            
        elsif @user.profile.job_title == "Entrepreneurs"
            "<i class='fa fa-lightbulb-o'></i>".html_safe
            
        elsif @user.profile.job_title == "Investors"
            "<i class='fa fa-dollar'></i>".html_safe
            
        end
        
    end
end
