<clr-datagrid [(clrDgSingleSelected)]="selectedArticle" [clDgRowSelection]="true">
    <clr-dg-action-bar>
        <div>            
            <label for="search_title" class="required">게시글 제목</label>
            <label for="search_title" aria-haspopup="true" role="tooltip" class="tooltip tooltip-validation tooltip-sm" [class.invalid]="title.invalid && (title.dirty || title.touched)">                                
                <input #title="ngModel" [(ngModel)]="fkBoardInput" [ngModelOptions]="{standalone: true}"   
                    type="text" 
                    id="search_title" 
                    placeholder="게시글 제목"                 
                    size="10"
                    required 
                    >
                <span class="tooltip-content">
                This field cannot be empty!
                </span>
            </label>          
        </div>
        선택된 게시글 : <span class="username" *ngIf="selectedArticle">{{selectedArticle.title}}</span>&nbsp;&nbsp;<span>{{searchTitle}}</span>
        <button class="btn btn-sm btn-secondary" (click)="getArticleList(fkBoardInput)">조회</button>      
    </clr-dg-action-bar>
  
    <clr-dg-column [clrDgField]="'pkArticle'">
        <ng-container *clrDgHideableColumn="{hidden:true}">
            게시글 키
        </ng-container>
    </clr-dg-column>
    <clr-dg-column [clrDgField]="'title'">게시글</clr-dg-column>  
    <clr-dg-column [clrDgField]="'fromDt'"    [style.width.px]="130">시작일자</clr-dg-column>
    <clr-dg-column [clrDgField]="'toDt'"      [style.width.px]="130">종료일자</clr-dg-column>
    
    <clr-dg-row *clrDgItems="let article of articleList" [clrDgItem]="article">
        <clr-dg-cell>{{article.pkArticle}}</clr-dg-cell>
        <clr-dg-cell>{{article.title}}</clr-dg-cell>      
        <clr-dg-cell>{{article.fromDt | date}}</clr-dg-cell>
        <clr-dg-cell>{{article.toDt | date}}</clr-dg-cell>
    </clr-dg-row>

    <clr-dg-footer>
        <clr-dg-pagination #pagination [clrDgPageSize]="10">
        {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
        of {{pagination.totalItems}} boards
        </clr-dg-pagination>              
    </clr-dg-footer>      
</clr-datagrid>